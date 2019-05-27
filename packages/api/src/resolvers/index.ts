import { Parent, Args, Ctx, Info } from './types';

import {
  getRecipes,
  getRecipe,
  deleteRecipe,
  createRecipe,
  updateRecipe
} from '../services/recipes';

export const Query = {
  recipes: () => {
    return getRecipes();
  },
  recipe: (parent: Parent, args: Args, ctx: Ctx, info: Info) => {
    return getRecipe(args.id);
  }
};

export const Mutation = {
  async deleteRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    await deleteRecipe(args.id);
    return { message: 'success' };
  },

  async createRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    const recipe = {
      name: args.name,
      ingredients: args.ingredients,
      notes: args.notes,
      steps: args.steps,
      id: ''
    };

    return createRecipe(recipe);
  },

  async updateRecipe(parent: Parent, args: Args, ctx: Ctx, info: Info) {
    const recipe = {
      name: args.name,
      ingredients: args.ingredients,
      notes: args.notes,
      steps: args.steps,
      id: args.id
    };

    return updateRecipe(recipe);
  }
};
