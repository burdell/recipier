import React from 'react';
import Router from 'next/router';

import {
  GetRecipeComponent,
  DeleteRecipeComponent
} from '../../generated/Graphql';
import { Recipe as RecipeComponent } from './component';

interface Props {
  id: string;
}

export const Recipe = ({ id }: Props) => {
  return (
    <GetRecipeComponent variables={{ recipeId: id }}>
      {({ data }) => {
        const recipe = data && data.recipe;
        if (!recipe) return null;

        return (
          <DeleteRecipeComponent>
            {deleteRecipe => (
              <RecipeComponent
                onDelete={async () => {
                  await deleteRecipe({ variables: { id } });
                  Router.push('/');
                }}
                recipe={recipe}
              />
            )}
          </DeleteRecipeComponent>
        );
      }}
    </GetRecipeComponent>
  );
};
