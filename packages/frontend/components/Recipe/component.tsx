import React from 'react';

import { Recipe as RecipeType } from '@recipier/types';
import { Title, Section, RecipeContainer, SectionHeader } from './styles';

interface Props {
  recipe: RecipeType;
}

export const Recipe = ({ recipe }: Props) => (
  <RecipeContainer>
    <Title>{recipe.name}</Title>
    {recipe.ingredients.length && (
      <Section>
        <SectionHeader>Ingedients</SectionHeader>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </Section>
    )}

    {recipe.steps.length && (
      <Section>
        <SectionHeader>Steps</SectionHeader>
        <ol>
          {recipe.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>
    )}

    {recipe.notes.length && (
      <Section>
        <SectionHeader>Notes</SectionHeader>
        <ol>
          {recipe.steps.map(note => (
            <li key={note}>{note}</li>
          ))}
        </ol>
      </Section>
    )}
  </RecipeContainer>
);
