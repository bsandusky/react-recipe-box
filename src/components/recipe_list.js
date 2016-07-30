import React, { Component } from 'react';
import RecipeListItem from './recipe_list_item';
import SearchBar from './search_bar';

class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.state = {  initialRecipes: this.props.recipes,
                    recipes: [] };
  }

  componentWillMount() {
    this.setState({ recipes: this.state.initialRecipes });
  }

  renderList() {
    return this.state.recipes.map((recipe) => {
      return (
        <RecipeListItem
          onRecipeSelect={this.props.onRecipeSelect}
          key={recipe.name}
          recipe={recipe} />
      );
    });
  }

  filterList(event) {
    let updatedList = Array.prototype.filter.call(this.state.initialRecipes, (item) => {
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ recipes: updatedList });
  }

  render() {
    return (
      <div>
        <SearchBar filterList={ this.filterList.bind(this) } />
        <ul className="col-md-4 list-group">
          { this.renderList() }
        </ul>
    </div>
    );
  }
};

export default RecipeList;
