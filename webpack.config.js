// Use this for the calculating the output path (absolute path)
var path = require('path');
const outputPath = path.resolve(__dirname, 'docs');
// vue-loader@15から必要
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // It's better to set either development/production/none, otherwise you can get a warnining message
    mode: 'development',
    devServer: {
        // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
        // ここでは outputPath ディレクトリのindex.htmlにアクセスするよう設定してます
        contentBase: outputPath  // when you access the root URL, the server looks for the file under contentBase folder
    },
    // Input file
    entry: './src/main.js',
    // Exported file
    output: {
        // Path to export.  This must be absolute path
        // contentBase と同じ場所。つまり index.html と同じ場所に bundle.js として出力される
        path: outputPath,

        // Output file name.  All the files are merged into this file
        filename: 'bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
        extensions: ['.js', '.vue'],
        alias: {
            // vue-template-compilerに読ませてコンパイルするために必要
            vue$: 'vue/dist/vue.esm.js',
        },
    }
};
