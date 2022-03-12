

import React,{ useContext, useState } from 'react'
import AuthContext from '../context/auth/context'
import socket from '../io'

import { useNavigate } from 'react-router-dom'
import { customRequest } from '../config/customFetch'
import { IUser } from '../interface/user'

export interface ILogin {}
export interface ULogin {
  email: string,
  password: string
}
const LoginComp: React.FC<ILogin> = (props) => {
  const navigate = useNavigate()
  const UserContext = useContext(AuthContext)
  const [ loading,setLoading ] = useState<boolean>(false)
  const [ login,setLogin ] = useState<ULogin>({
    email: '',
    password: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name,value } = e.target
    setLogin((val) => ({
      ...val,
      [name]: value
    }))
  }
  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    const request = customRequest({ url: 'login', method: 'POST', body: JSON.stringify(login) }) 
    fetch(request).then((val) => {
      if(val.status === 200)
        {
          val.json().then((res) => {
            const TOKEN: string = res.message.token
            const USER: IUser = res.message.user
            socket.emit('login', { USER })
            localStorage.setItem('token', TOKEN)
            UserContext.userDispatch({ TYPE: 'LOGIN' , PAYLOAD: { USER,TOKEN } }) 
            navigate('/home') 
          }) 
        } 
        else 
        { 
          // display error message
          // clear password field
          
          val.json().then((res) => {
            console.log(res)
        }) 
        }
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
    })
    .finally(() => {
      setLoading(false)  
    })
  }
  
  if(loading)
  {
    return (
      <div>loading.</div>
    )
  }

  return (
    <div>
      <label>Login</label>
      <div>
        <input type = 'text'
          name = 'email'
          value = { login.email }
          onChange = { onChange }
        />
        <input type = 'password' 
          name = 'password'
          value = { login.password }
          onChange = { onChange }
        />
        <button onClick = { loginHandler }>Login</button>
      </div>
      
    </div>
  )  
}


export default LoginComp
