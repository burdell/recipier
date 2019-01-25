import React from 'react';

import { RecipesStyles, Recipe } from './styles';

interface Props {
  recipes: any[];
}

export const RecipesList = ({ recipes }: Props) => (
  <RecipesStyles>
    {recipes.map((recipe, index) => (
      <Recipe key={index}>{recipe.name}</Recipe>
    ))}
  </RecipesStyles>
);
