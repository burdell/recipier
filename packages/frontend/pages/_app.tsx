import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { Layout } from '../components/Layout';
import withApolloClient from '../lib/with-apollo-client';

class Recipier extends App<any> {
  public render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Layout>
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </Layout>
    );
  }
}

export default withApolloClient(Recipier);
