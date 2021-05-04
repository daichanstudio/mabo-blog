module.exports = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        })
        return config
    },
}

const withImages = require('next-images');
module.exports = withImages();

//next.config.js
// const withImages = require('next-images');
// const withCSS = require('@zeit/next-css');

// module.exports = withImages(withCSS()npm );

// const withSass = require('@zeit/next-sass')
// module.exports = withSass()
