import { Prisma } from './generated/prisma-client';

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true
});

export { db };
