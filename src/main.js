import Vue from 'vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
