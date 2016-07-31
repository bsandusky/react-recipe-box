import React, { Component } from 'react';
import Header from './header';
import RecipeList from './recipe_list';
import RecipeDetail from './recipe_detail';
import db from '../../db/recipes';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      selectedRecipe: null
    };

    this.dataSetup();
  }

  dataSetup() {

    if (typeof localStorage === "undefined" || localStorage === null) {
      alert("This browser does not support localStorage.");
    } else {
      localStorage.setItem('recipes', JSON.stringify(db));
    }
  }

  componentWillMount() {
    let recipes = JSON.parse(localStorage.getItem('recipes'));
    this.setState({
      recipes: recipes,
      selectedRecipe: recipes[0],
    });
  }

  render() {
    return (
      <div>
        <Header />
        <RecipeDetail recipe={this.state.selectedRecipe} />
        <RecipeList
          recipes={this.state.recipes}
          onRecipeSelect={ selectedRecipe => this.setState({ selectedRecipe }) }
           />
      </div>
    );
  }
}

App.propTypes = {
  recipes: React.PropTypes.array,
  selectedRecipe: React.PropTypes.object
};
