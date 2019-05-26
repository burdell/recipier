import React from 'react';
import Router from 'next/router';

import {
  GetRecipeComponent,
  UpdateRecipeComponent
} from '../../generated/Graphql';
import { EditRecipe as EditComponent } from './component';

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
              <EditComponent
                recipe={recipe}
                onSave={async (updates, finishedEdit = false) => {
                  await updateRecipe({ variables: updates });
                  if (finishedEdit) {
                    Router.push(`/recipe/${updates.id}`);
                  }
                }}
              />
            )}
          </UpdateRecipeComponent>
        );
      }}
    </GetRecipeComponent>
  );
};
