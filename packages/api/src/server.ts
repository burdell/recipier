import { GraphQLServer } from 'graphql-yoga';

import { db } from './db';
import { Query, Mutation } from './resolvers';

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: { Query, Mutation },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({
      ...req,
      db
    })
  });
}

export { createServer };
