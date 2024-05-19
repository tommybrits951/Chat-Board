import { useDispatch, useSelector } from "react-redux";
import { updateRegister, clearRegister } from "./formSlice.cjs";
import { useState } from "react";
export default function Register() {
  const [error, setError] = useState('')
  const {user_email, password, username, confirm} = useSelector((state) => state.forms.register)

  function submit(e) {
    e.preventDefault()
  }
  const dispatch = useDispatch()
  function change(e) {
    const {name, value} = e.target
    
    if (name === "confirm" && value !== password) {
      setError("passwords must match!")
    } else {
      setError("")
    }
    return dispatch(updateRegister({name, value}))
  }
  function clear() {
    return dispatch(clearRegister())
  }
    return (
    <section>
        <h2 className='text-4xl text-center text-blue-500 font-mono underline'>Register User</h2>
        <p className="text-center text-lg text-red-500">{error}</p>
    <form onSubmit={submit} className='absolute left-1/4 w-2/4 text-center mt-5 bg-sky-700 p-5'>
        <h3 className='text-lg mt-3 text-white font-serif'>User Email</h3>
        <input type='email' name='user_email' value={user_email} onChange={change} className='rounded-lg p-1 w-3/5' />
        <h3 className='text-lg mt-3 text-white font-serif'>Username</h3>
        <input type='text' name='username' value={username} onChange={change} className='rounded-lg p-1 w-3/5' />
        <h3 className='text-lg mt-3 text-white font-serif'>Password</h3>
        <input type='password' name='password' value={password} onChange={change} className='rounded-lg p-1 w-3/5' />
        <h3 className='text-lg mt-3 text-white font-serif'>Confirm Password</h3>
        <input type='password' name='confirm' value={confirm} onChange={change} className='rounded-lg p-1 w-3/5' />
        <br />
        <button onClick={clear}>Clear</button>
    </form>

    </section>
  )
}
