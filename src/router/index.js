import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import PostsList from '@/pages/posts/Index'
import PostsAdd from '@/pages/posts/Add'

import ConfigList from '@/pages/config/Index'

import ModuleList from '@/pages/module/Index'

import TagList from '@/pages/tag/Index'

import MemberList from '@/pages/member/Index'
import RoleList from '@/pages/role/Index'

import CategoryList from '@/pages/category/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        withoutAuth : true
      }
    },
    {
      path: '/posts/index',
      name: 'PostsList',
      component: PostsList
    },
    {
      path: '/posts/add',
      name: 'PostsAdd',
      component: PostsAdd
    },
    {
      path: '/config/index',
      name: 'ConfigList',
      component: ConfigList
    },
    {
      path: '/module/index',
      name: 'ModuleList',
      component: ModuleList
    },
    {
      path: '/tag/index',
      name: 'TagList',
      component: TagList
    },
    {
      path: '/member/index',
      name: 'MemberList',
      component: MemberList
    },
    {
      path: '/role/index',
      name: 'RoleList',
      component: RoleList,
      meta : {
        title: '角色列表'
      }
    },
    {
      path: '/category/index',
      name: 'CategoryList',
      component: CategoryList,
      meta : {
        title: '分类列表'
      }
    }
  ]
})
