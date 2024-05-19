import {useState, useContext} from 'react'
import { ChatContext } from '../../App'
import axios from 'axios'
const initForm = {
    user_email: "",
    password: ""
}

export default function Login() {
  const {setToken, token} = useContext(ChatContext)
  const [formData, setFormData] = useState(initForm)
    function submit(e) {
        e.preventDefault()
    }
    function change(e) {
        const {name, value} = e.target;
        return setFormData({...formData, [name]: value})
    }


    return (
    <section className='text-center pt-5'>
      <h2 className='text-4xl text-cyan-600 font-mono'>Login User</h2>
      <form onSubmit={submit} encType='multipart/form-data' className='absolute p-5 rounded-xl mt-5 bg-slate-500 w-3/6 left-1/4'>
        <h3 className='m-3 text-white text-lg font-serif'>Email</h3>
        <input type='email' name='user_email' value={formData.user_email} onChange={change} className='p-1 text-lg rounded-lg' required/>
        <h3 className='m-3 text-white text-lg font-serif'>Password</h3>
        <input type='password' name='password' value={formData.password} onChange={change} className='p-1 text-lg rounded-lg' required/>
        <br/>
        <button type='submit' className='bg-green-500 text-white p-2 rounded-xl mt-5'>Submit</button>
      </form>
    </section>
  )
}
