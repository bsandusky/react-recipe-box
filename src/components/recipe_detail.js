import React from 'react';
import Ingredients from './ingredients';
import Directions from './directions';
import EditRecipe from './edit_recipe';


const RecipeDetail = ({recipe}) => {

  if (!recipe) {
    return <div> Loading... </div>;
  }

  if (recipe.image === "") {
    return (
      <div className="recipe-detail col-md-8">
        <div>{recipe.name}</div>
        <Ingredients ingredients={recipe.ingredients} />
        <Directions directions={recipe.directions} />
        <EditRecipe recipe={recipe} />
      </div>
    );
  }

  return (
    <div className="recipe-detail col-md-8">
      <div><img src={recipe.image} className="image" /></div>
      <div>{recipe.name}</div>
      <Ingredients ingredients={recipe.ingredients} />
      <Directions directions={recipe.directions} />
      // <EditRecipe recipe={recipe} />
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: React.PropTypes.object
};

export default RecipeDetail;
