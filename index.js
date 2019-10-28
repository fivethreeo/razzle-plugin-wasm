

function modify(defaultConfig, { target, dev }, webpack) {
  const config = defaultConfig;
  
  config.output.webassemblyModuleFilename = "[hash].wasm";
  
  config.module.rules.push(
    {
      test: /\.wasm$/,
      type: "webassembly/async"
    }
  )

  config.experiments = {
    ...(config.experiments || {}), 
    asyncWebAssembly: true,
    importAwait: true
  }

  return config;
}

module.exports = modify;
