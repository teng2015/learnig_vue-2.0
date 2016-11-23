// router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home'
import Empty from './Empty'
Vue.use(VueRouter);

const routes = [
	
	{
		path: '/home',
		component: Home
	},
	{
		path: '/404',
		component: Empty
	},
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '*',
		redirect: '/404'
	}

];

const router = new VueRouter({routes});

export default router