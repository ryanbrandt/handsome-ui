module.exports = {
  components: "./src/**/*.tsx",
  require: ["./src/index.scss"],
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
          test: /\.(css|scss)$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
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
