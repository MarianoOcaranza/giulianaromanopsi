import {Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Landing from './layouts/Landing'
import About from './layouts/About'
import Contact from './layouts/Contact'

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/' Component={Landing}/>
                <Route path='/about' Component={About}/>
                <Route path='/contact' Component={Contact}/>
            </Routes>
        </MainLayout>
    )
}

export default App;