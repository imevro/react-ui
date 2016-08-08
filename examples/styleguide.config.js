const path = require(`path`);
const glob = require(`glob`);

export default {
  title: `React Style Guide Example`,
  defaultExample: true,
  components: () => {
    return glob.sync(path.resolve(__dirname, `../src/layers/**/*.js`)).filter((module) => {
      return /\/[A-Z]\w*\.js$/.test(module);
    });
  },
  updateWebpackConfig: (webpackConfig) => {
    const dir = path.resolve(__dirname, `lib`);
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: dir,
        loader: `babel`,
      },
      {
        test: /\.css$/,
        include: dir,
        loader: `style!css?modules&importLoaders=1`,
      },
    );
    return webpackConfig;
  },
};
