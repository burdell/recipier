import React from 'react';
import Link from 'next/link';

import { GetRecipesRecipes } from '../generated/Graphql';
import { RecipesStyles, Recipe } from './styles';

interface Props {
  recipes: GetRecipesRecipes[];
}

export const Recipes = ({ recipes }: Props) =>
  recipes && recipes.length ? (
    <RecipesStyles>
      {recipes.map((recipe, index) => (
        <Link href="/recipe/[id]" as={`/recipe/${recipe.id}`} key={index}>
          <Recipe>{recipe.name}</Recipe>
        </Link>
      ))}
    </RecipesStyles>
  ) : (
    <div>There were no recipes found!</div>
  );
