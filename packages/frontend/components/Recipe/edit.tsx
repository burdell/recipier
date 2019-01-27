import React, { Component } from 'react';

import { Recipe as RecipeType } from '@recipier/types';
import { Title, Section, RecipeContainer, SectionHeader } from './styles';
import { Button } from '../Button';

interface Props {
  recipe: RecipeType;
  onSave(r: RecipeType): void;
}

type State = Partial<RecipeType>;

export class EditRecipe extends Component<Props, State> {
  public readonly state: State = {};

  public render() {
    const { recipe } = this.props;

    const ingredients = this.state.ingredients || recipe.ingredients;
    const steps = this.state.steps || recipe.steps;
    const notes = this.state.notes || recipe.notes;

    return (
      <RecipeContainer>
        <Title>
          <input
            defaultValue={recipe.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Recipe name"
          />
        </Title>
        <Section>
          <SectionHeader>Ingredients</SectionHeader>
          <div>
            {ingredients.length &&
              ingredients.map((ing, i) => (
                <div key={i}>
                  <input
                    defaultValue={ing}
                    placeholder="Add an ingredient"
                    onChange={e => {
                      this.editList('ingredients', e.target.value, i);
                    }}
                  />
                </div>
              ))}
          </div>
          <Button onClick={() => this.addToList('ingredients')}>+</Button>
        </Section>
        <Section>
          <SectionHeader>Steps</SectionHeader>
          <div>
            {steps.length &&
              steps.map((step, i) => (
                <div key={i}>
                  <input
                    defaultValue={step}
                    placeholder="Add a step"
                    onChange={e => {
                      this.editList('steps', e.target.value, i);
                    }}
                  />
                </div>
              ))}
          </div>
          <Button onClick={() => this.addToList('steps')}>+</Button>
        </Section>
        <Section>
          <SectionHeader>Notes</SectionHeader>
          <div>
            {notes.length &&
              notes.map((note, i) => (
                <div key={i}>
                  <input
                    defaultValue={note}
                    placeholder="Add a step"
                    onChange={e => {
                      this.editList('notes', e.target.value, i);
                    }}
                  />
                </div>
              ))}
          </div>
          <Button onClick={() => this.addToList('notes')}>+</Button>
        </Section>
        <Button onClick={this.saveRecipe}>Save Recipe</Button>
      </RecipeContainer>
    );
  }

  private editList = (
    list: 'ingredients' | 'notes' | 'steps',
    value: string,
    index: number
  ) => {
    let currentList = this.state[list];
    if (!currentList) {
      currentList = this.props.recipe[list] || [];
    }

    const updatedList = [...currentList];
    updatedList[index] = value;
    this.setState({ [list]: updatedList });
  };

  private addToList = (list: 'ingredients' | 'notes' | 'steps') => {
    let currentList = this.state[list];
    if (!currentList) {
      currentList = this.props.recipe[list] || [];
    }

    const updatedList = [...currentList];
    updatedList.push('');
    this.setState({ [list]: updatedList });
  };

  public saveRecipe = () => {
    const update = { ...this.props.recipe, ...this.state };
    this.props.onSave(update);
  };
}
