import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import New from './pages/New';
import Register from './pages/Register';
import Spot from './pages/Spot';

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/spot" element={<Spot/>}/>

            </Routes>

        </BrowserRouter>
    );
}

