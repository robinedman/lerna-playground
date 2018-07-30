module.exports = {
  menu: links => links.map(link => link.toUpperCase()),
  hero: text => `Hero with text ${text}`,
  footer: links => links.map(link => link.toUpperCase())
};
