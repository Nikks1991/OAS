var path = require('path');

module.exports = {
    mode: "development", 
    devServer: {
        contentBase: './',
        compress: true,
	port: 9001
    }
}
