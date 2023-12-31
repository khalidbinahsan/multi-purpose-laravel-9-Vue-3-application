import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';

import './bootstrap';
import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';
import Routes from './router.js';


const app = createApp({});
const router = createRouter({
    history: createWebHistory(),
    routes: Routes
});
app.use(router);
app.mount('#app');