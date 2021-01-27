module.exports = {
  components: "./src/**/*.tsx",
  verbose: true,
  title: "Handsome UI Component Guide",
  usageMode: "expand",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
          test: /\.(woff|woff2)$/,
          use: {
            loader: "url-loader",
          },
        },
      ],
    },
  },
};
