
import React, { useState,useEffect, useLayoutEffect } from 'react'
import LoginComp from '../component/LoginComp'
import socket from '../io'
export interface IStartPage {}
const StartPage: React.FC<IStartPage> = (props) => {
  const [ onlineUser,setOnlineUser ] = useState<number>(0)
  
  useEffect(() => {
    socket.on('online_user', (data) => {
      setOnlineUser(data.data)
    }) 
  },[])

  useLayoutEffect(() => {
    socket.emit('get_online_user')
  })

  return (
    <div>
      <div>
        <button>Login</button>
        <button>Register</button>
        user: { onlineUser }
      </div>
    </div>

  )

}


export default StartPage
