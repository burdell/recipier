/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RECIPE
// ====================================================

export interface RECIPE_recipe {
  __typename: "Recipe";
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  notes: string[];
}

export interface RECIPE {
  recipe: RECIPE_recipe | null;
}

export interface RECIPEVariables {
  id: string;
}
