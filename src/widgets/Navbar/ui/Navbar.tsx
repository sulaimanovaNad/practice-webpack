import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} to='/'>Home</AppLink>
                <AppLink to='/about'>About</AppLink>
            </div>
        </div>
    )
} 


