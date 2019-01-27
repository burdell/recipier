/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_RECIPES_QUERY
// ====================================================

export interface ALL_RECIPES_QUERY_recipes {
  __typename: "Recipe";
  id: string;
  name: string;
}

export interface ALL_RECIPES_QUERY {
  recipes: (ALL_RECIPES_QUERY_recipes | null)[];
}
