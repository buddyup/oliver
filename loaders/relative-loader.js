/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

// this is directly taken from https://github.com/webpack/file-loader
// and is a hack that somehow loses the `query` and sets the proper path.

var loaderUtils = require("loader-utils");

module.exports = function(content) {
  this.cacheable && this.cacheable();
  if(!this.emitFile) throw new Error("emitFile is required from module system");
  var query = loaderUtils.parseQuery(this.query);
  var url = loaderUtils.interpolateName(this, query.name || "fonts/[name].[ext]", {
    context: query.context || this.options.context,
    content: content,
    regExp: query.regExp
  });
  this.emitFile(url, content);
  return "module.exports = " + JSON.stringify(url) + ";";
}
module.exports.raw = true;
