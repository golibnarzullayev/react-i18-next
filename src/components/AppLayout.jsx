import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

const AppLayout = ({ changeLanguage }) => {
   return (
      <div>
         <Header changeLanguage={changeLanguage} />
         <Outlet/>
      </div>
   )
}

export default AppLayout