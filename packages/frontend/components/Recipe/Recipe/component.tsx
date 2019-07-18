import React from 'react';
import Link from 'next/link';

import { Button } from '../../Button';
import { GetRecipeRecipe } from '../../generated/Graphql';
import { Section } from '../Section';

import { Title, RecipeContainer, RecipeActions } from '../styles';

interface Props {
  recipe: GetRecipeRecipe;
  onDelete(): void;
}

export const Recipe = ({ recipe, onDelete }: Props) => {
  return (
    <>
      <RecipeActions>
        <Link href="/edit/[id]" as={`/edit/${recipe.id}`}>
          <Button>edit</Button>
        </Link>
        <Button onClick={onDelete}>delete</Button>
      </RecipeActions>
      <RecipeContainer>
        <Title>{recipe.name}</Title>

        {recipe.notes.length > 0 && (
          <Section title="Notes" items={recipe.notes} />
        )}

        {recipe.ingredients.length > 0 && (
          <Section title="Ingredients" items={recipe.ingredients} />
        )}

        {recipe.steps.length > 0 && (
          <Section title="Steps" type="number" items={recipe.steps} />
        )}
      </RecipeContainer>
    </>
  );
};
