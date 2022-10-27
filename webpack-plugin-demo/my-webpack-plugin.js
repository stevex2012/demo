var fs = require("fs");
class MyWebpackPlugin {
  constructor(props) {
    this.props = props;
  }
  apply(compiler) {
    compiler.hooks.done.tap("MyWebpackPlugin", (_, cb) => {
      const { baseOutPutPath, buildVersion } = this.props;
      const indexHtmlPath = `${baseOutPutPath}/index.html`;
      const versionPath = `${baseOutPutPath}/${buildVersion}`;

      const existHtml = fs.existsSync(indexHtmlPath);
      const existVersionPath = fs.existsSync(versionPath);

      if (existHtml && existVersionPath) {
        // copy dist/index.html to dist/${version}/
        fs.copyFileSync(indexHtmlPath, versionPath + "/index.html");
      }
      typeof cb === "function" && cb();
    });
  }
}

module.exports = MyWebpackPlugin;
