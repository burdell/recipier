import React from 'react';
import Router from 'next/router';

import { CreateRecipeComponent } from '../generated/Graphql';
import { RecipeForm } from './RecipeForm';

export const CreateRecipe = () => (
  <CreateRecipeComponent>
    {createRecipe => (
      <RecipeForm
        recipe={{ name: '', ingredients: [], steps: [], notes: [] }}
        onSave={async recipe => {
          const result = await createRecipe({ variables: recipe });
          if (result && result.data) {
            const id = result.data.createRecipe.id;
            Router.push(`/recipe/${id}`);
          }
        }}
        onCancel={() => Router.push(`/`)}
      />
    )}
  </CreateRecipeComponent>
);
