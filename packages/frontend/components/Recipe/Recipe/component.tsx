import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { Button } from '../../Button';
import { GetRecipeRecipe } from '../../generated/Graphql';
import { secondary } from '../../../design/colors';
import { Section } from '../Section';

const NotesSection = styled.div`
  background-color: ${secondary.secondary9};
  color: ${secondary.secondary1};
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid ${secondary.secondary5};
  display: inline-block;
`;

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
          <NotesSection>
            <Section title="Notes" items={recipe.notes} />
          </NotesSection>
        )}

        {recipe.ingredients.length > 0 && (
          <Section title="Ingredients" items={recipe.ingredients} />
        )}

        {recipe.steps.length > 0 && (
          <Section title="Steps" items={recipe.steps} />
        )}
      </RecipeContainer>
    </>
  );
};
