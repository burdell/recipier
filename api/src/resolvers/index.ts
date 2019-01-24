import { forwardTo } from 'prisma-binding';

export const Query = {
  recipes: (parent, args, ctx, info) => {
    console.log(ctx.db.query);
    return ctx.db.recipes({}, info);
  }
  // recipes: forwardTo('db')
};

export const Mutation = {
  async createRecipe(parent, args, ctx, info) {
    return ctx.db.createRecipe({ ...args }, info);
  }
};
