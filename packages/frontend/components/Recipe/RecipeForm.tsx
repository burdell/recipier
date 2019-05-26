import React, { useState } from 'react';
import { Title, Section, RecipeContainer, SectionHeader } from './styles';
import { Button } from '../Button';
import { Recipe } from './types';

interface Props {
  recipe: Recipe;
  onSave(updates: Recipe, finishEdit: boolean): void;
}

export const RecipeForm = ({ recipe, onSave }: Props) => {
  const [recipeUpdates, setUpdates] = useState<Recipe>({
    name: recipe.name,
    ingredients: [...(recipe.ingredients || [])],
    notes: [...(recipe.notes || [])],
    steps: [...(recipe.steps || [])]
  });

  const mergeUpdates = (updates: Partial<Recipe>) => {
    setUpdates({ ...recipeUpdates, ...updates });
  };

  const editList = (list: string[], value: string, index: number) => {
    const newList = [...list];
    newList[index] = value;
    return newList;
  };

  const addToList = (list: string[] | null | undefined) => {
    let newList = list ? [...list] : [];
    newList.push('');
    return newList;
  };

  const { name, ingredients, steps, notes } = recipeUpdates;
  return (
    <RecipeContainer>
      <Title>
        <input
          defaultValue={name || ''}
          onChange={e => mergeUpdates({ name: e.target.value })}
          placeholder="Recipe name"
        />
      </Title>
      <Section>
        <SectionHeader>Ingredients</SectionHeader>
        <div>
          {ingredients &&
            ingredients.map((ing, i) => (
              <div key={i}>
                <input
                  defaultValue={ing}
                  placeholder="Add an ingredient"
                  onChange={e => {
                    mergeUpdates({
                      ingredients: editList(ingredients, e.target.value, i)
                    });
                  }}
                />
              </div>
            ))}
        </div>
        <Button
          onClick={() => mergeUpdates({ ingredients: addToList(ingredients) })}
        >
          +
        </Button>
      </Section>
      <Section>
        <SectionHeader>Steps</SectionHeader>
        <div>
          {steps &&
            steps.map((step, i) => (
              <div key={i}>
                <input
                  defaultValue={step}
                  placeholder="Add a step"
                  onChange={e => {
                    mergeUpdates({
                      steps: editList(steps, e.target.value, i)
                    });
                  }}
                />
              </div>
            ))}
        </div>
        <Button onClick={() => mergeUpdates({ steps: addToList(steps) })}>
          +
        </Button>
      </Section>
      <Section>
        <SectionHeader>Notes</SectionHeader>
        <div>
          {notes &&
            notes.map((note, i) => (
              <div key={i}>
                <input
                  defaultValue={note}
                  placeholder="Add a step"
                  onChange={e => {
                    mergeUpdates({
                      notes: editList(notes, e.target.value, i)
                    });
                  }}
                />
              </div>
            ))}
        </div>
        <Button onClick={() => mergeUpdates({ notes: addToList(notes) })}>
          +
        </Button>
      </Section>
      <Button onClick={() => onSave(recipeUpdates, true)}>Save Recipe</Button>
    </RecipeContainer>
  );
};
