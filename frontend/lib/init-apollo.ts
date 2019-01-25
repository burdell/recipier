import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject
} from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

if (!(process as any).browser) {
  (global as any).fetch = fetch;
}

function create(initialState: NormalizedCacheObject) {
  return new ApolloClient({
    connectToDevTools: (process as any).browser,
    ssrMode: !(process as any).browser,
    link: new HttpLink({
      uri: 'http://localhost:4466',
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export const initApollo = (initialState: NormalizedCacheObject) => {
  if (!(process as any).browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
    return apolloClient;
  }
};
