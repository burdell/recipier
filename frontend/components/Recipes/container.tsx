import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { RecipesList } from './component';

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY {
    recipes {
      id
      name
    }
  }
`;

export class RecipesContainer extends Component<{}, {}> {
  public render() {
    return (
      <Query query={ALL_RECIPES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <div>Loading...</div>;

          if (data) {
            return <RecipesList recipes={data.recipes} />;
          }
        }}
      </Query>
    );
  }
}
