import React from 'react'
import { userState,iniUserState } from '../../interface/context/context'
import { IReducer } from '../../interface/context/reducer'
import { defaultUser } from '../../interface/user'

const reducer = (state: userState, action: IReducer): userState => {
  const USER = action.PAYLOAD.USER || defaultUser
  const TOKEN = action.PAYLOAD.TOKEN || ''

  switch( action.TYPE ) {

    case 'LOGIN':
      return {
          USER,
          TOKEN,
          STATUS: true
      }
    case 'LOGOUT':
      return iniUserState
    case 'AUTH':
      return iniUserState 
    default: 
      return iniUserState

  } 
}


export default reducer
