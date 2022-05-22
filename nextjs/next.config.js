/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // devServer: {
  //   hot: true,
  // },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // // Important: return the modified config
  //   // config.module.rules.push({
  //   //   test: /\.js$/,
  //   //   exclude: /node_modules/,
  //   //   "loader": "babel-loader",
  //   //   options: {
  //   //     presets: ["es2015", "react"]
  //   //   }
  //   // })
  //   const isDevelopment = process.env.NODE_ENV !== 'production';
  //   const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
  //   config = {
  //     ...config,
  //     mode: isDevelopment ? 'development' : 'production',
  //     hot:true,
  //     plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
  //   }
  //   config.module.rules.push({
  //     test: /\.[jt]sx?$/,
  //     exclude: /node_modules/,
  //     use: [
  //       {
  //         loader: require.resolve('babel-loader'),
  //         options: {
  //           plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
  //         },
  //       },
  //     ],
  //   })
  //
  //
  //
  //   return config
  // }
}

// const { readdirSync } = require('fs')
//
// const dirs = readdirSync('./node_modules/@frnt', { withFileTypes: true })
//   .map(dirent => '@frnt/' + dirent.name)
//   .filter(f => readdirSync(`./node_modules/${f}`).indexOf('package.json') > -1)
//
//
// const withTM = require('next-transpile-modules')(dirs, { resolveSymlinks: true }); // pass the modules you would like to see transpiled

module.exports = nextConfig
