// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withNx = require('@nrwl/next/plugins/with-nx');
const webpack = require('webpack');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
  [
    [
      withImages,
      {
        inlineImageLimit: 2048
      }
    ]
    // other plugins
  ],
  {
    webpack: (config) => {
      /*
      THIS is the workaround
      // Prevent nx from adding an svg handler - stick to what is provided by
      // nextjs or that we have defined ourselves.  https://github.com/nrwl/nx/issues/4182
      config.module.rules.push = (...items) => {
        Array.prototype.push.call(
          config.module.rules,
          ...items.filter((item) => item.test.toString() !== '/\\.svg$/')
        )
      }*/
      return config;
    },
  }
);
