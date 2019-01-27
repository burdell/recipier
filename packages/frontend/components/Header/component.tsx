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
        <Button>+ create</Button>
      </Link>
    </div>
  </HeaderStyles>
);

export { Header };
