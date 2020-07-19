import uuid from 'uuid'
import Vue from 'vue'


console.log(uuid())
console.log(Vue)

let vue_component = new Vue({
    el: '#app',
    data: {
        message: 'aho'
    }
})

console.log(vue_component)
