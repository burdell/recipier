import React from 'react';
import Link from 'next/link';

import { LinkButton } from '../Button';

import { HeaderStyles, AppName, HeaderActions } from './styles';

const Header = () => (
  <HeaderStyles>
    <AppName>
      <Link href="/">
        <a>recipier</a>
      </Link>
    </AppName>

    <HeaderActions>
      <LinkButton href="/create">create</LinkButton>
    </HeaderActions>
  </HeaderStyles>
);

export { Header };
