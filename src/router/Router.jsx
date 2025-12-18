import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "protected-route-react";
import Main from '../core/Main'
import HomePage from '../components/HomePage'
import { AdminLogin } from '../Dashboard/components/AdminLogin'

import { AdminRouter } from '../Dashboard/router/AdminRouter'
import Login from '../components/Login';

export default function Router() {
    return (
        <>
            <BrowserRouter>
            
                <Routes>
                    <Route path="/adminlogin" element={<AdminLogin/>} />
                    
                    <Route path="/admin/*" element={<AdminRouter/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route element={<Main />} >
                        <Route path='/' element={<HomePage />} /> 
                    </Route>
            
                </Routes>
            </BrowserRouter>
        </>
    )
}
