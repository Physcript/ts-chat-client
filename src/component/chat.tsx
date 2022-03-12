import React, { useState,useContext, ChangeEvent, useEffect } from 'react'
import AuthContext from '../context/auth/context'
import socket from '../io'

export interface IChat {}
export interface ILogin {
  email: string,
  password: string
}

const Chat = (props: IChat) => {
    const authContext = useContext(AuthContext)
    const [ login,setLogin ] = useState<ILogin>({
      email: '',
      password: ''
    })
    const [ message,setMessage ] = useState<string>('')
    
    const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const body = JSON.stringify(login)
      const URL = 'http://localhost:1337/api/login'
      const REQUEST = new Request(URL, {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body
      })

      fetch(REQUEST).then((val) => {
        if(val.status === 200) 
          {
            val.json().then((res) => {
              const { token , user } = res.message 
              authContext.userDispatch({TYPE: 'LOGIN' , PAYLOAD: { USER: user, TOKEN: token }})
            }) 
          }
        else 
          {
            val.json().then((res) => {
              console.log(res)   
            })
          }
      })

    } 
  
  const sendHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    socket.emit('message', { data: message })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name,value } = e.target
    setLogin((val) => ({
        ...val,
        [name]: value
      }))
  }

  useEffect(() => {
    socket.on('rm', (data) => {
      console.log(data.data)
    })
  }, [])

    return (

      <div>
        { authContext.userState.STATUS === false ? (
          <div>
          <label>Login</label>
          <input type = "text" value = { login.email } name = 'email' onChange = { onChange }/>
          <input type = "password" value = { login.password } name = 'password' onChange = { onChange } />
          <button onClick = { loginHandler }>Login</button>
          </div>
        ) 
        : 
        (
          <div>
            <label>{ authContext.userState.USER.name }</label>
          </div>
        )
        }  
       
        <div>
          <input type = "text" value = { message } name = 'message'
            onChange = { (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value) }  
            
          />
          <button onClick = { sendHandler }>Send</button>
        </div>


      </div> 

    )
}

export default Chat
