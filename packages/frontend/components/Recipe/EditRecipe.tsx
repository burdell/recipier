import React from 'react';
import Router from 'next/router';

import {
  GetRecipeComponent,
  UpdateRecipeComponent
} from '../generated/Graphql';
import { RecipeForm } from './RecipeForm';

interface Props {
  id: string;
}

export const EditRecipe = ({ id }: Props) => {
  return (
    <GetRecipeComponent variables={{ recipeId: id }}>
      {({ data }) => {
        const recipe = data && data.recipe;
        if (!recipe) return null;

        return (
          <UpdateRecipeComponent>
            {updateRecipe => (
              <RecipeForm
                recipe={recipe}
                onSave={async (updates, finishedEdit = false) => {
                  await updateRecipe({ variables: { id: id, ...updates } });
                  if (finishedEdit) {
                    Router.push(`/recipe/${id}`);
                  }
                }}
                onCancel={() => Router.push(`/recipe/${id}`)}
              />
            )}
          </UpdateRecipeComponent>
        );
      }}
    </GetRecipeComponent>
  );
};
