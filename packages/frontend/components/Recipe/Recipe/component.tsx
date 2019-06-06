import React from 'react';
import Link from 'next/link';

import { Button } from '../../Button';
import { GetRecipeRecipe } from '../../generated/Graphql';

import {
  Title,
  Section,
  RecipeContainer,
  SectionHeader,
  RecipeActions,
  PageContainer
} from '../styles';

interface Props {
  recipe: GetRecipeRecipe;
  onDelete(): void;
}

export const Recipe = ({ recipe, onDelete }: Props) => {
  return (
    <PageContainer>
      <RecipeActions>
        <Link href={`/recipe/${recipe.id}/edit`}>
          <Button>edit</Button>
        </Link>
        <Button onClick={onDelete}>delete</Button>
      </RecipeActions>
      <RecipeContainer>
        <Title>{recipe.name}</Title>
        {recipe.ingredients.length > 0 && (
          <Section>
            <SectionHeader>Ingedients</SectionHeader>
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </Section>
        )}

        {recipe.steps.length > 0 && (
          <Section>
            <SectionHeader>Steps</SectionHeader>
            <ol>
              {recipe.steps.map(step => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Section>
        )}

        {recipe.notes.length > 0 && (
          <Section>
            <SectionHeader>Notes</SectionHeader>
            <ul>
              {recipe.notes.map(note => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </Section>
        )}
      </RecipeContainer>
    </PageContainer>
  );
};
