const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "client/src/index.jsx"),
    output: {
        path: path.resolve(__dirname, "client/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "client/src/"),
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
                
            }
        ]
    }
};

/// specify using ract preset env preset




// test: /\.(js|jsx)$/,
