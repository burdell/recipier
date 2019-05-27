import { db } from '../db';
import {
  RecipeCreateInput,
  Recipe,
  RecipeUpdateInput
} from '../../prisma/generated/prisma-client';

export function getRecipes() {
  return db.recipes();
}

export function getRecipe(id: string) {
  return db.recipe({ id });
}

export function deleteRecipe(id: string) {
  return db.deleteRecipe({ id });
}

export function createRecipe(rawRecipe: Recipe) {
  const recipe = sanitizeRecipe(rawRecipe);
  const newRecipe: RecipeCreateInput = {
    name: recipe.name,
    ingredients: { set: recipe.ingredients },
    notes: { set: recipe.notes },
    steps: { set: recipe.steps }
  };
  return db.createRecipe(newRecipe);
}

export function updateRecipe(rawRecipe: Recipe) {
  const recipe = sanitizeRecipe(rawRecipe);
  const updatedRecipe: RecipeUpdateInput = {
    name: recipe.name,
    ingredients: recipe.ingredients ? { set: recipe.ingredients } : undefined,
    notes: recipe.notes ? { set: recipe.notes } : undefined,
    steps: recipe.steps ? { set: recipe.steps } : undefined
  };

  return db.updateRecipe({ data: updatedRecipe, where: { id: recipe.id } });
}

function sanitizeRecipe({
  name,
  ingredients,
  notes,
  steps,
  id
}: Recipe): Recipe {
  return {
    name: name ? name.trim() : '',
    ingredients: ingredients
      ? ingredients.filter(ingredient => !!ingredient)
      : [],
    notes: notes ? notes.filter(note => !!note) : [],
    steps: steps ? steps.filter(step => !!step) : [],
    id
  };
}
