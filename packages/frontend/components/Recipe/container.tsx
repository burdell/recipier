import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { RECIPEVariables, RECIPE } from './apollo-types/RECIPE';
import { Recipe } from './component';

interface Props {
  id: string;
}

const query = gql`
  query RECIPE($id: ID!) {
    recipe(id: $id) {
      id
      name
      ingredients
      steps
      notes
    }
  }
`;
class GetRecipe extends Query<RECIPE, RECIPEVariables> {}

export const RecipeContainer = ({ id }: Props) => (
  <GetRecipe query={query} variables={{ id }}>
    {({ data, error, loading }) => {
      if (loading) return <div>Loading...</div>;
      if (!data || !data.recipe) return null;

      return <Recipe recipe={data.recipe} />;
    }}
  </GetRecipe>
);
