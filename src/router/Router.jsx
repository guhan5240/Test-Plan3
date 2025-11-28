import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../core/Main'
import HomePage from '../components/HomePage'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} >
                        <Route path='/' element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
