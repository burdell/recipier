import React, { Component } from 'react';

import { RecipeCreateInput } from '@recipier/types';
import { RecipeContainer, Title } from '../Recipe/styles';

export class RecipeForm extends Component<{}, RecipeCreateInput> {
  public readonly state: RecipeCreateInput = {
    name: '',
    ingredients: undefined,
    notes: undefined,
    steps: undefined
  };

  render() {
    return (
      <RecipeContainer>
        <Title>
          <input
            defaultValue={this.state.name}
            onChange={e => {
              e.preventDefault();
            }}
          />
        </Title>
      </RecipeContainer>
    );
  }
}
