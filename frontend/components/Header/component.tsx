import Link from 'next/link';

import { Button } from '../Button';

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
      <Link href="/create">
        <a>
          <Button>+</Button>
        </a>
      </Link>
    </div>
  </HeaderStyles>
);

export { Header };
