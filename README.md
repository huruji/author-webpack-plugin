# author-webpack-plugin
A webpack plugin to add author info to your bundles

## How to use

```js
// webpack.config.js

const AuthorWebpackPlugin = require('author-webpack-plugin')

const config = {
  plugins: [
    new AuthorWebpackPlugin({
      author: 'huruji',
      email: 'huruji3@foxmail.com',
      homepage: 'https://github.com/huruji/author-webpack-plugin',
      github: 'https://github.com/huruji'
    })
  ]
}
```

your bundle output:

```js
/*
  @Author: huruji

  @Email: huruji3@foxmail.com

  @Homepage: https://github.com/huruji/author-webpack-plugin

  @Github: https://github.com/huruji

  @Date: Sat Jan 12 2019 23:11:39 GMT+0800 (GMT+08:00)
*/
// your bundle code
```