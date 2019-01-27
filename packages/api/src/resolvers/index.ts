import { Parent, Args, Ctx, Info } from './types';
import { RecipeCreateInput } from '../generated/prisma-client';

export const Query = {
  recipes: (parent: Parent, args: Args, ctx: Ctx, info: Info) => {
    return ctx.db.recipes({});
  },
  recipe: (parent: Parent, { id }: Args, ctx: Ctx, info: Info) => {
    return ctx.db.recipe({ id }, info);
  }
};

export const Mutation = {
  async createRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    const recipe: RecipeCreateInput = {
      name: args.name,
      ingredients: { set: args.ingredients },
      notes: { set: args.notes },
      steps: { set: args.steps }
    };

    return ctx.db.createRecipe(recipe);
  },

  async deleteRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    const where = { id: args.id };
    await ctx.db.deleteRecipe(where);

    return { message: 'success' };
  }
};
