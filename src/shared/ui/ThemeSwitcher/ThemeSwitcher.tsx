// import cls from './ThemeSwitcher.module.scss'
// import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider';
import { Button,ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};