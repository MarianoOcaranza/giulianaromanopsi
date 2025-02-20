import {Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Landing from './layouts/Landing'
import About from './layouts/About'
import Contact from './layouts/Contact'
import NotFound from './layouts/NotFound'

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </MainLayout>
    )
}

export default App;