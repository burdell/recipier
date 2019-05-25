export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type GetRecipesVariables = {};

export type GetRecipesQuery = {
  __typename?: 'Query';

  recipes: GetRecipesRecipes[];
};

export type GetRecipesRecipes = {
  __typename?: 'Recipe';

  id: string;

  name: string;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetRecipesDocument = gql`
  query GetRecipes {
    recipes {
      id
      name
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
