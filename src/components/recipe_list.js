import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {

  const RecipeItems = props.recipes.map((recipe) => {
    return (
      <RecipeListItem
        onRecipeSelect={props.onRecipeSelect}
        key={recipe.name}
        recipe={recipe} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {RecipeItems}
    </ul>
  );
};

export default RecipeList;
