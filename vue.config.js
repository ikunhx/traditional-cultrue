const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    client: {

      overlay: false//关掉报错===没有报错

    },
  },
  // 使用 configureWebpack 来添加或覆盖 Webpack 配置
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
          ]
        }
        // 其他规则...
      ]
    }
  },
  // chainWebpack: config => {
  //   // 确认json loader配置
  //   config.module
  //     .rule('json')
  //     .test(/\.json$/)
  //     .use('json-loader')
  //     .loader('json-loader')
  //     .end();
  // },
  // 插件选项
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/_variables.scss')
      ]
    }
  }
});

