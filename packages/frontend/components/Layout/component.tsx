import { ReactNode, Fragment } from 'react';
import { Global } from '@emotion/core';
import Head from 'next/head';

import { Header } from '../Header';
import { CssReset } from './reset.styles';
import { LayoutStyles, BodyStyles } from './styles';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <Fragment>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Kameron|Raleway"
        rel="stylesheet"
      />
    </Head>
    <Global styles={CssReset} />
    <LayoutStyles>
      <Header />
      <BodyStyles>{props.children}</BodyStyles>
    </LayoutStyles>
  </Fragment>
);

export { Layout };
