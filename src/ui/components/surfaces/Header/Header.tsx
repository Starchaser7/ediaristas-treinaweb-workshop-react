import React from 'react';
import { HeaderAppBar, HeaderLogo } from './Header.style';
import { Container, Toolbar } from '@material-ui/core';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={'sticky'}>
      <Toolbar component={Container}>
        <HeaderLogo src={'/img/logos/logo.svg'} alt={'Imagem do Logo'} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
