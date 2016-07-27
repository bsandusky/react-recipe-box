import React, { Component } from 'react';
import db from '../../db/recipes';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: {}
    }

    this.dataSetup();
  }

  dataSetup() {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('recipes', JSON.stringify(db));
    }

    else {
      // Sorry! No Web Storage support..
    }
  }

  componentWillMount() {
    var db = localStorage.getItem('recipes');
    this.setState({ recipes: JSON.parse(db) });
  }

  render() {
    return (
      <div>Recipe Box!</div>
    );
  }
}
