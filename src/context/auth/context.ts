
import React, { createContext } from 'react'
import { IAuthState,iniContextState,userState} from '../../interface/context/context'

const AuthContext = createContext<IAuthState>(iniContextState)
export const AuthContextProvider = AuthContext.Provider
export const AuthCOntextConsuemr = AuthContext.Consumer


export default AuthContext
