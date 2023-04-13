import cls from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme
}

export const Button = (props: ButtonProps) => {

    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        ...otherProps
    } = props

    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};