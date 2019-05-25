import { Prisma } from '../prisma/generated/prisma-client';

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT as string,
  secret: process.env.PRISMA_SECRET as string,
  debug: true
});

export { db };
