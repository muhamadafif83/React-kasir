import React, { Children } from 'react'
import Header from './header'
import Footer from './footer'
import Login from '../layout/pages/login'

function MainLayout({ children  }) {
  return (
    <div>
        <Header />
        <Login />
        <Footer />
    </div>
  )
}

export default MainLayout