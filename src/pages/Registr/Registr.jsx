import React, { useState } from 'react'
import "./Registr.scss"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Registr() {
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [resPassword, setResPassword] = useState("")
  const [errCopyPass, setErrCopyPass] = useState(false)

  const auth = getAuth()
  const navigate = useNavigate()

  function validPass(){
    return resPassword === password;
  }

    function createUser(event){
    event.preventDefault()
    if(!validPass()){
      setErrCopyPass(true)
      return
    }
    setErrCopyPass(false)
    createUserWithEmailAndPassword(auth, email, password).catch(() =>navigate("*")).then(() => {
      updateProfile(auth.currentUser, {
        displayName: lastName + " " + firstName,
      }).then(() => navigate("/"))
      .catch(() => navigate("*")) 
    })
    
  }
  return (
    <div>
      <form action="" className="ui-form" onSubmit={createUser}>
            <h3>Регистрация</h3>
            <div className="form-row">
                <input type="text" id="firstName" required autoComplete="off" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label htmlFor="firstName">First name</label>
            </div>
            <div className="form-row"> 
                <input type="text" id="lastName" required autoComplete="off" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <label htmlFor="lastName">Last Name</label>
            </div>         
            <div className="form-row">
                <input type="text" id="email" required autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-row">
                <input type="password" id="password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="password">Password</label>
            </div>
            {errCopyPass && <h4>Пароли не совпадают</h4>}
            <div className="form-row">
                <input type="password" id="resPassword" required autoComplete="off" value={resPassword} onChange={(e) => setResPassword(e.target.value)}/>
                <label htmlFor="resPassword">Copy password</label>
            </div>
            <p><input type="submit" value="Зарегистрироваться"/></p> 
            <Link to='/login' className='linkText'>Вход</Link>
        </form>
    </div>
  )
}
