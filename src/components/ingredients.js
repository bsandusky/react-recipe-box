import React from 'react';

const Ingredients = (props) => {

  const IngredientItems = props.ingredients.map((ingredient) => {

      return (
        <li key={ingredient} className="list-group-item">
          {ingredient}
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

Ingredients.propTypes = {
  ingredients: React.PropTypes.array
};

export default Ingredients;
