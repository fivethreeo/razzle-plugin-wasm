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

Usage

```javascript
import('./add.wasm').then(addModule=>{
  console.log(addModule(5, 6));
})
```

Usage with emscripten modules, built without SINGLE_FILE

```javascript
// modulename.mjs renamed from module.js
import moduleLoader from './modulename.mjs'; // important, use .mjs 
import moduleWasm from './modulename.wasm';

// Since webpack will change the name and potentially the path of the 
// `.wasm` file, we have to provide a `locateFile()` hook to redirect
// to the appropriate URL.
// More details: https://kripken.github.io/emscripten-site/docs/api_reference/module.html
const mod = moduleLoader({
  locateFile(path) {
    if(path.endsWith('.wasm')) {
      return moduleWasm;
    }
    return path;
  }
});

mod.onRuntimeInitialized = async () => {
 console.log('Emscripten runtime loaded');
};
```

Usage with emscripten modules, built with SINGLE_FILE

```javascript
// modulename.mjs renamed from module.js
import mod from './modulename.mjs'; // important, use .mjs 

mod.onRuntimeInitialized = async () => {
 console.log('Emscripten runtime loaded');
};
```