class AuthorPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.emit.tap('author-plugin', (compilation) => {
      const options = this.options
      return new Promise((resolve, reject) => {
        const assets = compilation.assets
        Object.keys(assets).forEach(e => {
          if (!/\.js$/.test(e)) return
          let source = assets[e].source()
          let info = []

          if (options.author) info.push(`@Author: ${options.author}`)
          if (options.email) info.push(`@Email: ${options.email}`)
          if (options.homepage) info.push(`@Homepage: ${options.homepage}`)
          if (options.github) info.push(`@Github: ${optioins.github}`)

          if (info.length) {
            info.push(`@Date: ${new Date()}`)
            source = `/*\n  ${info.join('\n\n  ')}\n*/\n${source}`
          }

          compilation.assets[e].source = () => source
          compilation.assets[e].size = () => source.length
        })
        resolve()
      })
    })
  }
}

module.exports = AuthorPlugin
