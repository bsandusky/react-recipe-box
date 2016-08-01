import React from 'react';

const EditRecipe = ({recipe}) => {

  return (
    <div>{recipe}</div>
  );
}

EditRecipe.propTypes = {
  recipe: React.PropTypes.object
};

export default EditRecipe;
