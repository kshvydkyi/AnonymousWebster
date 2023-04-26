import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Auth/Footer/Footer'
import Header from '../Auth/Header/Header'

export const Layout = () => {
    return (
        <div className="AppDiv">
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer><Footer /></footer>

        </div>
    )
}
