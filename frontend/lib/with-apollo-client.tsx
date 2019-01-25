import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';
import { RouterProps } from 'next/router';

import { initApollo } from './init-apollo';

export default (App: any) => {
  return class Apollo extends React.Component<RouterProps, {}> {
    static displayName = 'withApollo(App)';
    private apolloClient: any;

    static async getInitialProps(ctx: any) {
      const { Component, router } = ctx;

      let appProps: any = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const apollo = initApollo({});
      if (!(process as any).browser) {
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          console.error('Error while running `getDataFromTree`', error);
        }

        Head.rewind();
      }

      const apolloState = apollo!.cache.extract();
      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props: any) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    public render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
