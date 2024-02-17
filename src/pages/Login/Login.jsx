import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorText, setErrorText] = useState(false)
  const auth = getAuth()
  const navigate = useNavigate()

  function loginUser(event){
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setErrorText(false)
      navigate("/")
    }).catch(() => setErrorText(true))
  }

  return (
    <div>
      {errorText && <h2>Не верный email или пароль</h2>}
      <form action="" className="ui-form" onSubmit={loginUser}>
          <h3>Войти на сайт</h3>
          <div className="form-row">
              <input type="text" id="email" required autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="email">Email</label>
          </div>
          <div className="form-row">
              <input type="password" id="password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <label htmlFor="password">Пароль</label>
          </div>
          <p><input type="submit" value="Войти"/></p> 
          <Link to='/registration' className='linkText'>Регистрация</Link>
      </form>
    </div>
  )
}
