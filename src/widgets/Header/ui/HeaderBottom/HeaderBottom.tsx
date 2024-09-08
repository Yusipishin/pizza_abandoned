import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './HeaderBottom.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import Logo from '@/shared/assets/img/logo.png';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

interface HeaderBottomProps {
    scrolled?: boolean;
}

export const navLinks: Record<string, string> = {
    Пицца: '#pizza-list',
    Паста: '#paste-list',
    Супы: '#soups-list',
    Салаты: '#salads-list',
    Напитки: '#drinks-list',
    Десерты: '#desserts-list',
    Бакалея: '#grocery-list',
    Закуски: '#snacks-list',
    Акции: '#promotions-list',
    Комбо: '#combo-list',
    Контакты: '#contacts-list',
};

export const HeaderBottom = memo(({ scrolled }: HeaderBottomProps) => {
    const { t } = useTranslation();

    return (
        <HStack max justify="between" gap="32">
            {scrolled && (
                <AppLink to="/">
                    <AppImage
                        src={Logo}
                        alt={t('Логотип сайта Fibo')}
                        fallback={<Skeleton width={80} height={60} />}
                    />
                </AppLink>
            )}
            <HStack className={cls.navList} gap="16">
                {Object.keys(navLinks).map((key) => (
                    <AppLink key={key} to={navLinks[key]}>
                        {t(key)}
                    </AppLink>
                ))}
            </HStack>
            <HStack gap="32">
                {!scrolled && (
                    <Button className={cls.login}>
                        <Text theme="secondary" text={t('Войти')} />
                    </Button>
                )}
                <Button theme="accent" className={cls.cart}>
                    <HStack gap="8">
                        <Text text={t('Корзина')} />
                        |
                        <Text text="3" />
                    </HStack>
                </Button>
            </HStack>
        </HStack>
    );
});
