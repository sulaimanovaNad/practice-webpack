import { FC } from 'react';
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?:AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {

    const {
        children,
        className,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className,cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};