import Vue from 'vue'
import App from './App.vue'
import router from './router'
//require( '../node_modules/bootstrap/dist/css/bootstrap.css' );

new Vue({
    router,
    el: '#app',
    data: {
        message: 'aho'
    },
    components: {
        App
    },
    template: '<div>' +
                  '<App />' +
              '</div>',  // This is just normal HTML inserted into the 'el' defined above

})
