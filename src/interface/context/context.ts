
import React  from 'react'
import { IUser,defaultUser } from '../user'
import { IReducer } from './reducer'

export interface userState {
  USER: IUser,
  TOKEN: string,
  STATUS: boolean
}


export interface IAuthState {
  userState: userState,
  userDispatch: React.Dispatch<IReducer>
}


export const iniUserState = {
  USER: defaultUser,
  TOKEN: '',
  STATUS: false

} 
export const iniContextState  = {
  userState: iniUserState,
  userDispatch: () => {}
}
