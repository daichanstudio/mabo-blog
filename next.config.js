

module.exports = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        })
        return config
    },
}


// const withImages = require('next-images')
// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }

// const withSass = require('@zeit/next-sass')
// module.exports = withSass()
