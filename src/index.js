import Vue from 'vue'
import App from './App.vue'
require( '../node_modules/bootstrap/dist/css/bootstrap.css' );

new Vue({
    el: '#app',
    data: {
        message: 'aho'
    },
    components: {
        // Appというコンポーネントを使うよ、という宣言
        App
    },
    template: '<App/>',  // This is the HTML inserted into the el
})
