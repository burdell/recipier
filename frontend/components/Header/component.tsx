import Link from 'next/link';

import { HeaderStyles, AppName } from './styles';

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <a>
        <AppName>recipier</AppName>
      </a>
    </Link>
  </HeaderStyles>
);

export { Header };
