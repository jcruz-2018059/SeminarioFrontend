import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nabvar } from './components/Nabvar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
    </>
  )
}

export default App
