import React from 'react';
import Link from 'next/link';

import { RecipesStyles, Recipe } from './styles';

interface Props {
  recipes: ({
    name: string;
    id: string;
  } | null)[];
}

export const RecipesList = ({ recipes }: Props) =>
  recipes.every(r => r !== null) ? (
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
