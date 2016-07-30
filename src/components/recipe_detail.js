import React, { Component } from 'react';
import Ingredients from './ingredients';

class RecipeDetail extends Component {

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
          <Ingredients ingredients={this.props.recipe.ingredients} />
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
          <Ingredients ingredients={this.props.recipe.ingredients} />
          <div className="directions">Directions
            <ol className="list-group">{this.renderDirections()}</ol>
          </div>
      </div>
    );
  }
};

export default RecipeDetail;
