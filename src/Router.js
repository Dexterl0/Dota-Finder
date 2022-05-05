import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MatchDetail from './components/MatchDetail'
import MatchList from './components/MatchList'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MatchList />} />
                <Route path="/match/:id" element={<MatchDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router