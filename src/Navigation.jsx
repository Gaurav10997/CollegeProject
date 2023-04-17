import React from 'react'
import AuthContext from './store/AuthContest'

function Navigation() {
    const authCtx = createContext(AuthContext)
   
  return (
    <div>Navigation</div>
  )
}

export default Navigation