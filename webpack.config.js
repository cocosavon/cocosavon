var path = require('path');

module.exports = {
    // It's better to set either development/production/none, otherwise you can get a warnining message
    mode: 'development',

    devServer: {
        // Server regards the contentBase as a root
        contentBase: path.join(__dirname, 'public')  // when you access the root URL, the server looks for the file under contentBase folder
    },

    // Input file
    entry: './src/index.js',

    // Exported file
    output: {
        // Path to export.  This must be absolute path
        path: path.join(__dirname, 'public/js'),

        // Output file name.  All the files are merged into this file
        filename: 'bundle.js',
    }
};
