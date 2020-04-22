const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/main.js",
  output: {
    filename: "index.js",
    // path: `${__dirname}/build` albo:
    path: path.resolve(__dirname, "build"),
  },
};

//  albo:

// module.exports = {
//     entry: {
//         main: './source/app.js'
//     },
//     output: {
//         filename: '[name].bundle.js',
//         path: __dirname + '/dist'
//     }
// }
