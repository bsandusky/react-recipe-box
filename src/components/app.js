import React, { Component } from 'react';
import Header from './header';
import SearchBar from './search_bar';
import RecipeList from './recipe_list';
import db from '../../db/recipes';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      selectedRecipe: null
    }

    this.dataSetup();
  }

  dataSetup() {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('recipes', JSON.stringify(db));
    } else {
      Alert("Sorry! I cannot store things in this browser.");
    }
  }

  componentWillMount() {
    let db = localStorage.getItem('recipes');
    this.setState({
      recipes: JSON.parse(db),
      selectedRecipe: JSON.parse(db)[0],
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <RecipeList
          recipes={this.state.recipes}
          onRecipeSelect={ selectedRecipe => this.setState({ selectedRecipe }) }
           />
      </div>
    );
  }
}
