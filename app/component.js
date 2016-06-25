var styles = require('./main.css');

module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'Hello---00----world';
  element.className = styles.redButton;
  return element;
};