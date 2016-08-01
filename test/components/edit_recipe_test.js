import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import EditRecipe from '../../src/components/edit_recipe';
import { recipe } from '../test_helper'

describe('Edit Recipe', () => {
  let result;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<EditRecipe recipe={ recipe } />);
    result = renderer.getRenderOutput();
  });

  afterEach(() => {

  });

  it('renders', () => {
    expect(result).to.exist;
  });

  it('has a recipe object', () => {
    expect(result.props.children).to.be.an('object');
  });
});
