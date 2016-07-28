import React from 'react';
import RecipeListItem from './recipe_list_item';
import SearchBar from './search_bar';


const RecipeList = ({recipes, onRecipeSelect}) => {

  const RecipeItems = recipes.map((recipe) => {
    return (
      <RecipeListItem
        onRecipeSelect={onRecipeSelect}
        key={recipe.name}
        recipe={recipe} />
    );
  });

  return (
    <div>
      <SearchBar />
      <ul className="col-md-4 list-group">
        {RecipeItems}
      </ul>
  </div>
  );
};

export default RecipeList;
