/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
Vue.use(VueMoment, {
    moment,
})

import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
Vue.use(datePicker);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('wagaya-component', require('./components/Wagaya/index.vue'));

const router = new VueRouter({
    mode: 'history',
    routes: [
        // TOPページ
        {
            path: '/',
            component: require('./components/ExampleComponent.vue')
        },
        // 我が家
        {
            path: '/wagaya',
            component: require('./components/Wagaya/index.vue')
        }
    ]
});

const app = new Vue({router, el: '#app'});
