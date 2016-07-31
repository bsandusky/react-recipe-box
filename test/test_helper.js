import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

//mock local storage
const LocalStorage = require('node-localstorage').LocalStorage;
global.localStorage = new LocalStorage('./localStorageTemp');
global.window.localStorage = global.localStorage;

// add window properties to global object
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

let recipe = {
  "name": "recipe name",
  "description": "recipe description",
  "image": "recipe image",
  "ingredients": [1,2,3,4,5],
  "directions": [1,2,3,4,5]
};

export default recipe;
