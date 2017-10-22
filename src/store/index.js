import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	baseUrl : 'https://ewatch.okayapps.com/ecoapi'
}

export default new Vuex.Store({
  state
})