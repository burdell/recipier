import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { RECIPEVariables, RECIPE } from './apollo-types/RECIPE';
import {
  UPDATE_RECIPE,
  UPDATE_RECIPEVariables
} from './apollo-types/UPDATE_RECIPE';
import { Recipe } from './component';
import { EditRecipe as EditComponent } from './edit';

interface Props {
  id: string;
}

const get = gql`
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

const update = gql`
  mutation UPDATE_RECIPE(
    $id: ID!
    $name: String
    $ingredients: [String]
    $steps: [String]
    $notes: [String]
  ) {
    updateRecipe(
      id: $id
      name: $name
      steps: $steps
      notes: $notes
      ingredients: $ingredients
    ) {
      id
      name
      ingredients
      steps
      notes
    }
  }
`;

export const RecipeQuery = ({ id }: Props) => (
  <GetRecipe query={get} variables={{ id }}>
    {({ data, loading }) => {
      if (loading) return <div>Loading...</div>;
      if (!data || !data.recipe) return null;

      return <Recipe recipe={data.recipe} />;
    }}
  </GetRecipe>
);
class UpdateRecipe extends Mutation<UPDATE_RECIPE, UPDATE_RECIPEVariables> {}

export const EditRecipe = ({ id }: Props) => (
  <GetRecipe query={get} variables={{ id }}>
    {({ data, loading }) => {
      if (loading) return <div>Loading...</div>;
      if (!data || !data.recipe) return null;

      const recipe = data.recipe;
      if (!recipe) return null;
      return (
        <UpdateRecipe mutation={update}>
          {update => (
            <EditComponent
              recipe={{ ...recipe }}
              onSave={updatedRecipe => {
                update({
                  variables: {
                    id,
                    ...updatedRecipe
                  }
                });
              }}
            />
          )}
        </UpdateRecipe>
      );
    }}
  </GetRecipe>
);
