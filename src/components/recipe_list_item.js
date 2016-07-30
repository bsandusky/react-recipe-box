import React from 'react';

const RecipeListItem = ({recipe, onRecipeSelect}) => {

  return(
    <li onClick={() => onRecipeSelect(recipe)} className="list-group-item">
      <div className="recipe-name">{recipe.name}</div>
      <div className="recipe-description">{recipe.description}</div>
    </li>
  );
};

RecipeListItem.propTypes = {
  recipe: React.PropTypes.object,
  onRecipeSelect: React.PropTypes.func
};

export default RecipeListItem;
