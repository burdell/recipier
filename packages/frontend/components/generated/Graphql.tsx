export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type GetRecipeVariables = {
  recipeId: string;
};

export type GetRecipeQuery = {
  __typename?: 'Query';

  recipe: Maybe<GetRecipeRecipe>;
};

export type GetRecipeRecipe = {
  __typename?: 'Recipe';

  id: string;

  name: string;

  ingredients: string[];

  steps: string[];

  notes: string[];
};

export type GetRecipesVariables = {};

export type GetRecipesQuery = {
  __typename?: 'Query';

  recipes: GetRecipesRecipes[];
};

export type GetRecipesRecipes = {
  __typename?: 'Recipe';

  name: string;

  id: string;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetRecipeDocument = gql`
  query GetRecipe($recipeId: ID!) {
    recipe(id: $recipeId) {
      id
      name
      ingredients
      steps
      notes
    }
  }
`;
export class GetRecipeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetRecipeQuery, GetRecipeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetRecipeQuery, GetRecipeVariables>
        query={GetRecipeDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetRecipeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetRecipeQuery, GetRecipeVariables>
> &
  TChildProps;
export function GetRecipeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetRecipeQuery,
        GetRecipeVariables,
        GetRecipeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetRecipeQuery,
    GetRecipeVariables,
    GetRecipeProps<TChildProps>
  >(GetRecipeDocument, operationOptions);
}
export const GetRecipesDocument = gql`
  query GetRecipes {
    recipes {
      name
      id
    }
  }
`;
export class GetRecipesComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetRecipesQuery, GetRecipesVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetRecipesQuery, GetRecipesVariables>
        query={GetRecipesDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetRecipesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetRecipesQuery, GetRecipesVariables>
> &
  TChildProps;
export function GetRecipesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetRecipesQuery,
        GetRecipesVariables,
        GetRecipesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetRecipesQuery,
    GetRecipesVariables,
    GetRecipesProps<TChildProps>
  >(GetRecipesDocument, operationOptions);
}
