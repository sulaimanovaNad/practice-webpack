import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar/ui/Navbar'

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <AppRouter/>
        </div>
    )
}

export default App
