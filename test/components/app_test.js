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

  it('renders something', () => {
    expect(result).to.exist;
  });

});
