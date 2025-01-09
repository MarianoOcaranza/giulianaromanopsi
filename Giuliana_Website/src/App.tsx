import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/'/>
                <Route path='/about'/>
                <Route path='/contact'/>
            </Routes>
        </MainLayout>
    )
}

export default App;