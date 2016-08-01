import React, { Component } from 'react';
import RecipeListItem from './recipe_list_item';
import SearchBar from './search_bar';

class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }

  componentWillMount() {
    this.setState({ recipes: this.props.recipes });
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
    const filteredList = Array.prototype.filter.call(this.props.recipes, (item) => {
      const searchField = item.name.concat(' ', item.description);
      return searchField.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ recipes: filteredList });
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

RecipeList.propTypes = {
  recipes: React.PropTypes.array,
  onRecipeSelect: React.PropTypes.func
}

export default RecipeList;
