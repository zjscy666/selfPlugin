const fs = require('fs');
class TxtPlugin {
  constructor(options = {}) {
    this.options = options;
  }
  apply(compiler) {
    const {
      from,
      to
    } = this.options;
    compiler.hooks.emit.tapAsync('TxtPlugin', (compilation) => {
      fs.createReadStream(from).pipe(fs.createWriteStream(to));
    });
  }
}

module.exports = TxtPlugin;