import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about.vue'
import Calculation from './components/calculation.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'about',
            component: About,
        },
        {
            path: '/calc',
            name: 'calc',
            component: Calculation,
        }
    ]
})
