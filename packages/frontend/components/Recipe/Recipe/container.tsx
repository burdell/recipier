import React from 'react';

import { GetRecipeComponent } from '../../generated/Graphql';
import { Recipe as RecipeComponent } from './component';

interface Props {
  id: string;
}

export const Recipe = ({ id }: Props) => {
  return (
    <GetRecipeComponent variables={{ recipeId: id }}>
      {({ data }) => {
        const recipe = data && data.recipe;
        if (!recipe) return null;

        return <RecipeComponent recipe={recipe} />;
      }}
    </GetRecipeComponent>
  );
};
