const zooui = require("zooui");
console.log("I AM RENDERER and I require zooui", zooui);
module.exports = {
  render: items => items.map(item => `RENDERER: ${item}`)
};
