import React, { useState } from 'react'
import "./../scss/Auth.scss"
export const Auth = () => {
  const [ login,setlogin ] = useState(true)
  const HandleClickonLogin = ()=>{
    window.location.assign('http://localhost:5173/login')
  }
  const HandleClickonHome = ()=>{
    window.location.assign('http://localhost:5173/')
  }
  return (
    <div className='Auth'>
      {login ? <h2>Вход</h2> : <h2>Регистрация</h2>}
      
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Пароль' />
      {login ? <button onClick={HandleClickonHome}>Вход</button> : <button onClick={HandleClickonLogin}>Регистрация</button>}
      {login &&  <p onClick={()=> setlogin(!login)}>у меня еще нет аккаунта</p>}
    </div>
  )
}
