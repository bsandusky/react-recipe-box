import React, { Component } from 'react';
import Ingredients from './ingredients';
import Directions from './directions'

class RecipeDetail extends Component {

  render() {
    if (!this.props.recipe) {
      return <div> Loading... </div>;
    }

    if (this.props.recipe.image === "") {
      return (
        <div className="recipe-detail col-md-8">
          <div>{this.props.recipe.name}</div>
          <Ingredients ingredients={this.props.recipe.ingredients} />
          <Directions directions={this.props.recipe.directions} />
        </div>
      );
    }

    return (
      <div className="recipe-detail col-md-8">
        <div><img src={this.props.recipe.image} className="image" /></div>
        <div>{this.props.recipe.name}</div>
        <Ingredients ingredients={this.props.recipe.ingredients} />
        <Directions directions={this.props.recipe.directions} />
      </div>
    );
  }
};

export default RecipeDetail;
