import React, { useState,useEffect,useContext } from 'react'
import { IUser } from '../interface/user'
import socket from '../io'

export interface IHomePAge {}

const HomePage: React.FC<IHomePAge> = (props) => {

  const [ online_list,setOnline_list ] = useState<IUser[]>() 
  
  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }  
  useEffect(() => {
    socket.emit('get_online_list')  
    socket.on('online_list', (data) => {
      setOnline_list(data.data)
    })
      
  } ,[])

  return (
    <div>
      <div>
        <button onClick = { logoutHandler } style = {{ display: 'block' }} >Logout</button>
        <label>Online</label>
        { 
          online_list ? (<div>
            {
              online_list.map((list,index) => 
                {  
                  return (
                    <section key = { list.uid }>
                      <label>{ list.name }</label>
                    </section>
                  )
                }
              )    
            }
          </div>) : (<div>
            onone online 
          </div>)
        }
      </div>
    </div>
  )
}

export default HomePage
