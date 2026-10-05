import BaseLayout from './layout/baseLayout'
import HomePage from './views/homePage'
import LoginPage from './views/loginPage'
import DetailPage from './views/detailPage'
import { BrowserRouter, Routes, Route } from "react-router"
import { useEffect, useState } from 'react'


function App() {
  
  useEffect(() => {
    if(localStorage.access_token){
      setPage('homePage')
    }
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={<LoginPage />} />
          <Route element={<BaseLayout />} >
            <Route path="/pub/movie" element={<HomePage />} />
            <Route path='/pub/movie/:id' element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
