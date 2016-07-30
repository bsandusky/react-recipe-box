import React from 'react';

const Ingredients = (props) => {

  const IngredientItems = props.ingredients.map((ingredient) => {
    if (ingredient.measure === "") {

      return (
        <li key={ingredient.ingredient} className="list-group-item">
         {ingredient.quality} {ingredient.ingredient} {ingredient.quantity}
        </li>
      );
    };

    return (
      <li key={ingredient.ingredient} className="list-group-item">
        {ingredient.quantity} {ingredient.measure} {ingredient.quality} {ingredient.ingredient}
      </li>
    );
  });

  return (
    <div className="ingredients">Ingredients
      <ul className="list-group">
        {IngredientItems}
      </ul>
    </div>
  );
}

export default Ingredients;
