import { Routes , Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Hidro from './components/Hidro/Hidro'
import Navbar from './components/Nav/Navbar'

function App() {

    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Hidrogeologia' element={<Hidro />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
