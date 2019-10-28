[![npm version](https://badge.fury.io/js/razzle-plugin-wasm.svg)](https://badge.fury.io/js/razzle-plugin-wasm)

# razzle-plugin-wasm
This package contains a plugin to load wasm files with razzle

Usage in Razzle Projects
```sh
yarn add razzle-plugin-wasm --dev
```

create a **razzle.config.js** file in root directory of project (next to the *package.json*) and put this content inside it

Using the plugin with the default options
```javascript
// razzle.config.js

module.exports = {
  plugins: ['wasm'],
};
```