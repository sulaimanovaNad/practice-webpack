import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button,ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
 className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const {t,i18n} = useTranslation()
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
  return (
    <Button onClick={onToggle} theme={ButtonTheme.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])}>
        {t('lang')}
    </Button>
  );
};