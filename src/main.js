import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import {store} from './store/store';

Vue.config.productionTip = false;

// Use packages
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  render: h => h(App),
  store : store,
  router: router
}).$mount('#app');
