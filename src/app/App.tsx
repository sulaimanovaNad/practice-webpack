import './styles/index.scss'
import { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { Link, Route, Routes } from 'react-router-dom'
import { MainPageAsync } from '../pages/MainPage/ui/MainPage.async'
import { AboutPageAsync } from '../pages/AboutPage/ui/AboutPage.async'
import { classNames } from '../shared/lib/classNames/classNames'

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
