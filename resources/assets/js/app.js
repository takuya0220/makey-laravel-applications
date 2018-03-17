/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { Navbar } from 'bootstrap-vue/es/components';
import VueRouter from 'vue-router'
import underscore from 'vue-underscore';
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

Vue.use(underscore);
Vue.use(VueRouter);
Vue.use(VueMoment, {moment})
Vue.use(BootstrapVue);
Vue.use(datePicker);
Vue.use(Navbar);

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
    ],
    base: '/makey-laravel-applications/public',
    linkActiveClass: ''
});
const sidebar = new Vue({router, el: '#sidebar'});
const app = new Vue({router, el: '#app'});
