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
          await createRecipe({ variables: recipe });
          Router.push('/');
        }}
      />
    )}
  </CreateRecipeComponent>
);
