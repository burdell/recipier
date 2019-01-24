import { ReactNode, Fragment } from 'react';
import { Global } from '@emotion/core';

import { Header } from '../Header';
import { CssReset } from './reset.styles';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <Fragment>
    <Global styles={CssReset} />
    <div>
      <Header />
      {props.children}
    </div>
  </Fragment>
);

export { Layout };
