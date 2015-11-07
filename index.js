var colors = [
    'lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue',
    'darkorchid', 'crimson'
  ],
  colorMaps = {},
  colorIndex = 0,
  enabled = true;

function Logger(context) {
  colorMaps[context] = colorMaps[context] ||
    colors[colorIndex++ % colors.length];
  this.log = function () {
    if (!enabled) {
      return;
    }
    var colored = [
      '%c ' + context + ' ',
      'color: white; background: ' + colorMaps[context] + ';'
    ];
    var args = [].slice.call(arguments);
    console.log.apply(console, colored.concat(args));
  };
}

module.exports = Logger;

Logger.disable = function () {
  enabled = false;
};

Logger.enable = function () {
  enabled = true;
};

