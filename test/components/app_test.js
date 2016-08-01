import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../../src/components/app';

describe('App', () => {
  let result;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    result = renderer.getRenderOutput();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders', () => {
    expect(result).to.exist;
  });

  it('should render three children', () => {
    expect(result.props.children.length).to.equal(3);
  })

});
