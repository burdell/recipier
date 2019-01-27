/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_RECIPE
// ====================================================

export interface UPDATE_RECIPE_updateRecipe {
  __typename: "Recipe";
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  notes: string[];
}

export interface UPDATE_RECIPE {
  updateRecipe: UPDATE_RECIPE_updateRecipe;
}

export interface UPDATE_RECIPEVariables {
  id: string;
  name?: string | null;
  ingredients?: (string | null)[] | null;
  steps?: (string | null)[] | null;
  notes?: (string | null)[] | null;
}
