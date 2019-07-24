import React, { useState } from 'react';

import { Button } from '../Button';
import { Input } from '../Input';

import { Title, RecipeContainer, RecipeActions } from './styles';
import { Recipe } from './types';
import { Section } from './Section';

interface Props {
  recipe: Recipe;
  onSave(updates: Recipe, finishEdit: boolean): void;
  onCancel(): void;
}

export const RecipeForm = ({ recipe, onSave, onCancel }: Props) => {
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
    <>
      <RecipeActions>
        <Button onClick={() => onSave(recipeUpdates, true)}>save</Button>
        <Button onClick={onCancel}>cancel</Button>
      </RecipeActions>
      <RecipeContainer>
        <Title>
          <Input
            defaultValue={name || ''}
            onChange={e => mergeUpdates({ name: e.target.value })}
            placeholder="Recipe name"
          />
        </Title>

        {notes && (
          <div>
            <Section
              title="Notes"
              items={notes}
              renderItem={(note, i) => (
                <Input
                  defaultValue={note}
                  placeholder="Add a note"
                  onChange={e => {
                    mergeUpdates({
                      notes: editList(notes, e.target.value, i)
                    });
                  }}
                />
              )}
            />
            <Button onClick={() => mergeUpdates({ notes: addToList(notes) })}>
              +
            </Button>
          </div>
        )}

        {ingredients && (
          <div>
            <Section
              title="Ingredients"
              items={ingredients}
              renderItem={(ingredient, i) => (
                <Input
                  defaultValue={ingredient}
                  placeholder="Add an ingredient"
                  onChange={e => {
                    mergeUpdates({
                      ingredients: editList(ingredients, e.target.value, i)
                    });
                  }}
                />
              )}
            />
            <Button
              onClick={() =>
                mergeUpdates({ ingredients: addToList(ingredients) })
              }
            >
              +
            </Button>
          </div>
        )}

        {steps && (
          <div>
            <Section
              title="Steps"
              items={steps}
              type="number"
              renderItem={(step, i) => (
                <Input
                  defaultValue={step}
                  placeholder="Add a step"
                  onChange={e => {
                    mergeUpdates({
                      steps: editList(steps, e.target.value, i)
                    });
                  }}
                />
              )}
            />
            <Button onClick={() => mergeUpdates({ steps: addToList(steps) })}>
              +
            </Button>
          </div>
        )}
      </RecipeContainer>
    </>
  );
};
