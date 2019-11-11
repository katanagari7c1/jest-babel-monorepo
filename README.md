# Playing with Jest+Babel+Monorepo
Here we have a Node.js project with a subpackage project in `packages/` folder. We are using Jest+Babel to run the Unit tests, but if you use `.babelrc`, Babel is not used to transpile tests in subpackage. However, it works as expected when using `babel.config.js` file instead. 🤷‍♂️
