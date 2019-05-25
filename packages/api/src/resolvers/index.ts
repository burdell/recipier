import { Parent, Args, Ctx, Info } from './types';
import {
  RecipeCreateInput,
  RecipeUpdateInput
} from '../../prisma/generated/prisma-client';

export const Query = {
  recipes: (parent: Parent, args: Args, ctx: Ctx, info: Info) => {
    return ctx.db.recipes();
  },
  recipe: (parent: Parent, { id }: Args, ctx: Ctx, info: Info) => {
    return ctx.db.recipe({ id });
  }
};

export const Mutation = {
  async deleteRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    const where = { id: args.id };
    await ctx.db.deleteRecipe(where);

    return { message: 'success' };
  },

  async createRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    const recipe: RecipeCreateInput = {
      name: args.name,
      ingredients: { set: args.ingredients },
      notes: { set: args.notes },
      steps: { set: args.steps }
    };

    return ctx.db.createRecipe(recipe);
  },

  async updateRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    const updatedRecipe: RecipeUpdateInput = {
      name: args.name,
      ingredients: args.ingredients ? { set: args.ingredients } : undefined,
      notes: args.notes ? { set: args.notes } : undefined,
      steps: args.steps ? { set: args.steps } : undefined
    };

    return ctx.db.updateRecipe({ data: updatedRecipe, where: { id: args.id } });
  }
};
