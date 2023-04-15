import './styles/index.scss'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { useTheme } from 'app/providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { classNames } from '../shared/lib/classNames/classNames'


const App = () => {

    const { theme } = useTheme();

    return (
        <Suspense fallback={''}>
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
}

export default App
