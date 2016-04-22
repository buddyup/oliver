/**
 * This is directly taken from https://github.com/webpack/file-loader, as a
 * hack/fix to get ionic fonts in their proper path. Even though this is a direct copy
 * of file-loader v 0.8.5, it doesn't have the query option so the fonts dir is hard
 * coded. This was a response to needed a relative path for the `publicPath` in the
 * webpack config, which all the ionic fonts were prefixed `assets/bundles/assets/bundles/fonts/[name].[ext]`.
 *
 * Using an absolute publicPath, e.g. `/assets/bundles/`, broke iOS builds (and probably android too). Im guessing
 * because the `www` directory is copied to the various platform dirs and the web app is served from a parent dir
 * and not www.
 */

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

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
