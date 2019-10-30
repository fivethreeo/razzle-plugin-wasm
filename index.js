'use strict';

function modify(defaultConfig, { target, dev }, webpack) {
  const config = defaultConfig;
  
  config.module.rules = config.module.rules.reduce((rules, rule) => {

    if (!rule.test && rule.loader && /file-loader/.test(rule.loader)) {

      const { exclude, ...rest } = rule;

      rules.push({ ...rule, ...{
        exclude: [ /\.wasm$/, ...exclude ]
      }});

    }
    else {
      rules.push(rule);
    } 
    return rules;
  }, []);

  
  config.module.rules.push({
    test: /\.wasm$/,
    type: "javascript/auto",
    loader: "file-loader"
  });
  
  config.plugins.push(new webpack.IgnorePlugin(/(fs)/))

  return config;
}

module.exports = modify;
