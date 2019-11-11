# Playing with Jest+Babel+Monorepo
Here we have a Node.js project with a subpackage project in `packages/` folder. We are using Jest+Babel to run the Unit tests, but if you use `.babelrc`, Babel is not used to transpile tests in subpackage. However, it works as expected when using `babel.config.js` file instead. 🤷‍♂️

## How to reproduce
Check out to `master` branch:
```git checkout master```

Install dependencies and run tests:
```
npm install
npm test
```

Here, test should fail with the following error:
```
/home/user/jest-babel-monorepo/packages/subpackage/test/simple.test.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { greetMe } from '../src/util.js';
                                                                                                    ^

    SyntaxError: Unexpected token {

      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
```

However, switch to the `workaround` branch:
```
git checkout workaround
```

Run the same test with `npm test` and test should pass.
