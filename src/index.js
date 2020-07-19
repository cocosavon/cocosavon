import Vue from 'vue'
import App from './App.vue'


console.log(App)
console.log(Vue)


console.log(App)

new Vue({
    el: '#app',
    data: {
        message: 'aho'
    },
    components: {
        App
    }, // Appというコンポーネントを使うよ、という宣言
    template: '<App/>',  // This is the HTML inserted into the el
})
