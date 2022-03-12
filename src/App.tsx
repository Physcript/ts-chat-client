import React, { useEffect, useReducer,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import reducer from './context/auth/reducer';
import { iniUserState } from './interface/context/context';
import { AuthContextProvider } from './context/auth/context';
import route from './route';

function App() {
  const [userState,userDispatch] = useReducer(reducer,iniUserState)
  const authContextValues = {
      userState,
      userDispatch
  }

  return (
    <AuthContextProvider value = { authContextValues }>
    <BrowserRouter>
      <Routes>
        {
          route.map((route,index) => {
              return (
                <Route element =  { <route.element /> } path = { route.path } key = {index}  />
              )
            } 
          )
        }
      </Routes>
    </BrowserRouter> 
    </AuthContextProvider> 
  );
}

export default App;
