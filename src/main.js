// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import elementUI from 'element-ui'

Vue.use(elementUI);

Vue.config.productionTip = false

var host = process.env.API_HOST || 'ewatch.okayapps.com';

const ajax = function(){
	this.http = axios.create({
		baseUrl: 'https://' + host + '/ecoapi',
		timeout: 10000,
		headers: {'Content-Type': 'text/plain'}
	});
	this.post = function (url, data, config) {
    var ennPromise = {};
    ennPromise.promise = this.http.post(url, data, config);
    ennPromise.loadingInstance = this.loadingInstance;

    ennPromise.then = function (successFunction) {
      this.promise = this.promise.then(function (resp) {
        if (resp) {
          successFunction(resp);
        }

      }.bind(this));
      return this;
    };
    ennPromise.catch = function (errFunction) {
      this.promise = this.promise.catch(function (err) {

        errFunction(err);
      }.bind(this));
      return this;
    };
    return ennPromise;
  };
}
Vue.prototype.$ajax = new ajax;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
