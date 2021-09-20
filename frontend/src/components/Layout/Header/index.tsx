import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import md5 from 'md5';
import { Menu as MenuIcon, User, X } from 'react-feather';

import useLocale from 'hooks/useLocale';
import useAuth from 'hooks/useAuth';
import {
  Header as HeaderTag,
  Container,
  Logo,
  Menu,
  ToggleMenu,
  MenuItem,
  RightSection,
  UserSection,
  AuthIcon,
} from './styles';
import { useLayout } from 'hooks';
import Button from 'components/UI/Button';
import InlineButton from 'components/UI/InlineButton';
import { useAnimation } from 'framer-motion';

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { t, locale } = useLocale();
  const router = useRouter();
  const { isFetching, isLogged, user, setUser, setAccessToken } = useAuth();
  const { loginModal, registerModal } = useLayout();
  const headerAnimation = useAnimation();
  const menuAnimation = useAnimation();

  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then(() => {
        setUser(null);
        setAccessToken(null);
      })
      .catch((error) => {
        console.error('Error when logout: ', error);
      });
  };

  const menuItems = [
    {
      title: t('header_home'),
      path: '/',
    },
    {
      title: t('header_premieres'),
      path: '/premieres',
    },
    {
      title: t('header_movies'),
      path: '/movies',
    },
    {
      title: t('header_trailers'),
      path: '/trailers',
    },
  ];

  const handleToggleMenu = () => {
    if (isOpened) {
      headerAnimation.start(
        { backgroundColor: 'rgba(0, 0, 0, 0)' },
        { duration: 0.25 },
      );
      menuAnimation.start({ left: '-100%' });
    } else {
      headerAnimation.start({ backgroundColor: '#2e2e2e' }, { duration: 0.25 });
      menuAnimation.start({ left: 0 });
    }

    setIsOpened(!isOpened);
  };

  useEffect(() => {
    headerAnimation.start({ y: 0 });
  }, []);

  return (
    <HeaderTag
      initial={{ y: -200 }}
      animate={headerAnimation}
      transition={{ duration: 1 }}
    >
      <Container>
        <ToggleMenu onClick={handleToggleMenu}>
          {isOpened ? <X /> : <MenuIcon />}
        </ToggleMenu>

        <Link href="/" passHref>
          <Logo>
            <Image
              src="/assets/logo.svg"
              alt="Paisaflix"
              width="125px"
              height="35px"
            />
          </Logo>
        </Link>

        <Menu animate={menuAnimation} transition={{ type: 'linear' }}>
          {menuItems.map(({ title, path }) => (
            <Link key={title} href={path} passHref>
              <MenuItem active={router.pathname === path}>{title}</MenuItem>
            </Link>
          ))}
          <Link href="/" locale={locale == 'en' ? 'es' : 'en'} passHref>
            <MenuItem>{locale == 'en' ? 'ES' : 'EN'}</MenuItem>
          </Link>
        </Menu>

        <RightSection>
          {!isFetching && (
            <>
              {isLogged ? (
                <UserSection onClick={handleLogout}>
                  <img
                    src={`https://www.gravatar.com/avatar/${md5(user.email)}`}
                    alt={user.name}
                    title={user.name}
                  />
                  <span>{user.name}</span>
                </UserSection>
              ) : (
                <>
                  <InlineButton onClick={loginModal.onOpen}>
                    {t('auth_login')}
                  </InlineButton>
                  <Button padding="sm" onClick={registerModal.onOpen}>
                    {t('auth_register')}
                  </Button>

                  <AuthIcon onClick={registerModal.onOpen}>
                    <User />
                  </AuthIcon>
                </>
              )}
            </>
          )}
        </RightSection>
      </Container>
    </HeaderTag>
  );
};

export default Header;
