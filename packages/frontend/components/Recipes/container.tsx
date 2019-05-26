import React from 'react';

import { GetRecipesComponent } from '../generated/Graphql';
import { Recipes as RecipesComponent } from './component';

export const Recipes = () => (
  <GetRecipesComponent>
    {({ data }) => {
      const recipes = data ? data.recipes : [];
      return <RecipesComponent recipes={recipes} />;
    }}
  </GetRecipesComponent>
);
