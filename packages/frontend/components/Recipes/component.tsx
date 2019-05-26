import React from 'react';
import Link from 'next/link';

import { GetRecipesComponent } from '../generated/Graphql';
import { RecipesStyles, Recipe } from './styles';

export const Recipes = () => (
  <GetRecipesComponent>
    {({ data }) => {
      const recipes = data ? data.recipes : [];

      return recipes.every(r => r !== null) ? (
        <RecipesStyles>
          {recipes.map((recipe, index) => (
            <Link href={`/recipe/${recipe!.id}`} key={index}>
              <Recipe>{recipe!.name}</Recipe>
            </Link>
          ))}
        </RecipesStyles>
      ) : (
        <div>There were no recipes found!</div>
      );
    }}
  </GetRecipesComponent>
);
