import React, { Component } from 'react';

import { RecipeForm } from './component';

export class CreateRecipe extends Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>Create Recipe</h1>
        <RecipeForm />
      </div>
    );
  }
}
