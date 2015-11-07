var colors = [
    'lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson',
    '#9BB291', '#5D8A79', '#3D4656', '#D7A954', '#8D714C',
    '#B28272', '#CC76A1', '#DD9296', '#87B38D', '#828AB0', '#5B6195'
  ],
  colorMaps = {},
  colorIndex = 0,
  enabled = true;

function Logger(context) {
  colorMaps[context] = colorMaps[context] || colors[colorIndex++ % colors.length];
  this.log = function () {
    var colored = ['%c ' + context + ' ', 'color: white; background: ' + colorMaps[context] + ';'],
      args = [].slice.call(arguments);
    if (enabled) console.log.apply(console, colored.concat(args));
  };
}

module.exports = Logger;

Logger.disable = function () {
  enabled = false;
};

Logger.enable = function () {
  enabled = true;
};

