import { Routes , Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Nav/Navbar'

function App({setLocale, locale}) {

    return (
        <>
        <BrowserRouter>
            <Navbar setLocale={setLocale}  locale={locale}/>
            <Routes>
                <Route path='/' element={<Home setLocale={setLocale}  locale={locale} />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
