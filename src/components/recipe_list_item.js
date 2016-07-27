import React from 'react';

const RecipeListItem = ({recipe}) => {


  return(
    <li className="list-group-item">
      <h6>{recipe.name}</h6>
      <p>{recipe.description}</p>
    </li>
  );
};

export default RecipeListItem;
