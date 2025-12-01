import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../core/Main'
import HomePage from '../components/HomePage'
import { AdminLogin } from '../Dashboard/components/AdminLogin'
import { Dashboard } from '../Dashboard/components/Dashboard'

export default function Router() {
    return (
        <>
            <BrowserRouter>
            
                <Routes>
                    <Route path="/adminlogin" element={<AdminLogin/>} />
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route element={<Main />} >
                        <Route path='/' element={<HomePage />} />
                       
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
