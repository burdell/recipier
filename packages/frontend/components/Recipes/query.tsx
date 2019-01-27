import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { ALL_RECIPES_QUERY } from './apollo-types/ALL_RECIPES_QUERY';
import { RecipesList } from './component';

const query = gql`
  query ALL_RECIPES_QUERY {
    recipes {
      id
      name
    }
  }
`;
class AllRecipes extends Query<ALL_RECIPES_QUERY, {}> {}

export class RecipesQuery extends Component<{}, {}> {
  public render() {
    return (
      <AllRecipes query={query}>
        {({ data, loading }) => {
          if (loading) return <div>Loading...</div>;
          if (!data) return <div>No data!</div>;

          return <RecipesList recipes={data.recipes} />;
        }}
      </AllRecipes>
    );
  }
}
