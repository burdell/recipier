import React from 'react';
import Link from 'next/link';

import { LinkButton } from '../Button';

import { HeaderStyles, AppName } from './styles';

const Header = () => (
  <HeaderStyles>
    <div>
      <Link href="/">
        <a>
          <AppName>recipier</AppName>
        </a>
      </Link>
    </div>

    <div>
      <LinkButton href="/create">create</LinkButton>
      <LinkButton href="/create">import</LinkButton>
      <LinkButton href="/create">calendar</LinkButton>
    </div>
  </HeaderStyles>
);

export { Header };
