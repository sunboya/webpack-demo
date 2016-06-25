require('react');
require('./main.css');

var component = require('./component');
var component2 = require('./append');


document.body.appendChild(component());
document.body.appendChild(component2());
