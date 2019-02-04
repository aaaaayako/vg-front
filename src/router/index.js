import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import EntryForm from '@/components/EntryForm';
import Gacha from '@/components/Gacha';
import Result from '@/components/Result';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/EntryForm',
      name: 'EntryForm',
      component: EntryForm,
    },
    {
      path: '/Gacha',
      name: 'Gacha',
      component: Gacha,
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result,
    },
  ],
});
