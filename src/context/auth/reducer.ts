import React from 'react'
import { userState,iniUserState } from '../../interface/context/context'
import { IReducer } from '../../interface/context/reducer'

const reducer = (state: userState, action: IReducer): userState => {

  switch( action.TYPE ) {

    case 'LOGIN':
      return iniUserState
    case 'LOGOUT':
      return iniUserState
    case 'AUTH':
      return iniUserState 
    default: 
      return iniUserState

  } 
}


export default reducer
