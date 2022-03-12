import React from 'react'
import LoginComp from '../component/LoginComp'

export interface IRLPage {}

const RLPage: React.FC<IRLPage> = (props) => {
  return (
    <div>
      <LoginComp />
    </div>
  )
}

export default RLPage
