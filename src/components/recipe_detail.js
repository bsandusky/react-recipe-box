import React, { Component } from 'react';

class RecipeDetail extends Component {

  renderIngredients() {
    return this.props.recipe.ingredients.map((ingredient) => {

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
  }

  renderDirections() {
    return this.props.recipe.directions.map((direction) => {

      return (
        <li key={direction.order} className="list-group-item">
          {direction.order}: {direction.direction}
        </li>
      )
    });
  }

  render() {
    if (!this.props.recipe) {
      return <div> Loading... </div>;
    }

    if (this.props.recipe.image === "") {
      return (
        <div className="recipe-detail col-md-8">
          <div>{this.props.recipe.name}</div>
          <div>{this.props.recipe.description}</div>
          <div className="ingredients">Ingredients
            <ul className="list-group">{this.renderIngredients()}</ul>
          </div>
          <div className="directions">Directions
            <ol className="list-group">{this.renderDirections()}</ol>
          </div>
        </div>
      );
    }

    return (
      <div className="recipe-detail col-md-8">
        <div><img src={this.props.recipe.image} className="image" /></div>
        <div>{this.props.recipe.name}</div>
        <div>{this.props.recipe.description}</div>
        <div className="ingredients">Ingredients
          <ul className="list-group">{this.renderIngredients()}</ul>
        </div>
        <div className="directions">Directions
          <ol className="list-group">{this.renderDirections()}</ol>
        </div>
      </div>
    );
  }
};

export default RecipeDetail;
