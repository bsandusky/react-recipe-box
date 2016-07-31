import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import RecipeDetail from '../../src/components/recipe_detail';
import { recipe } from '../test_helper.js';

describe('RecipeDetail', () => {
  let result;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<RecipeDetail recipe={recipe} />);
    result = renderer.getRenderOutput();
  });

  it('renders', () => {
    expect(result).to.exist;
  });

  it('should render four children', () => {
    expect(result.props.children.length).to.equal(4);
  });

});
