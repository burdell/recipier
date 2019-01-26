import React from 'react';
import Link from 'next/link';

import { RecipesStyles, Recipe } from './styles';

interface Props {
  recipes: any[];
}

export const RecipesList = ({ recipes }: Props) => (
  <RecipesStyles>
    {recipes.map((recipe, index) => (
      <Link href={`/recipe/${recipe.id}`} key={index}>
        <Recipe>{recipe.name}</Recipe>
      </Link>
    ))}
  </RecipesStyles>
);
