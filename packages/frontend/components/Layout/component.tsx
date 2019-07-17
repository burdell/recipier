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
        href="https://fonts.googleapis.com/css?family=Spectral|Raleway"
        rel="stylesheet"
      />
      <title>recipier</title>
    </Head>
    <Global styles={CssReset} />
    <Header />
    <LayoutStyles>
      <BodyStyles>{props.children}</BodyStyles>
    </LayoutStyles>
  </Fragment>
);

export { Layout };
