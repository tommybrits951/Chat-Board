import {useState, createContext} from "react"
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from "./components/user/Login"
import Register from "./components/user/Register"
export const ChatContext = createContext()

function App() {
  const [token, setToken] = useState(null)


  return (
      <ChatContext.Provider value={{
        token,
        setToken
      }}>
        <main className="absolute w-full h-full bg-slate-300">
      {token === null ? 
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    : <Routes></Routes>
    }
    </main>
      </ChatContext.Provider>
  )
}

export default App
