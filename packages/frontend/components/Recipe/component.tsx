import React from 'react';

import { Recipe as RecipeType } from '@recipier/types';

interface Props {
  recipe: RecipeType;
}

export const Recipe = ({ recipe }: Props) => (
  <div>
    <h1>{recipe.name}</h1>

    {recipe.ingredients.length && (
      <div>
        <h2>Ingedients</h2>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )}

    {recipe.steps.length && (
      <div>
        <h2>Steps</h2>
        <ol>
          {recipe.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    )}

    {recipe.notes.length && (
      <div>
        <h2>Notes</h2>
        <ol>
          {recipe.steps.map(note => (
            <li key={note}>{note}</li>
          ))}
        </ol>
      </div>
    )}
  </div>
);
