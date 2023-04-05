import { Link,Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'


const App = () => {
    return (
        <div className='app'>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </div>
    )
}

export default App
