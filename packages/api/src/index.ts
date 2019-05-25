import { GraphQLServer } from 'graphql-yoga';
import { config } from 'dotenv';
config();

import { Query, Mutation } from './resolvers';
import { db } from './db';

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

const server = createServer();
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
