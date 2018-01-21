<template>
  <el-aside class="content-menu">

  <el-menu
    class="el-menu-vertical-demo">
    <el-menu-item index="1" @click="handleMenuItem('/')">
      <i class="el-icon-blog-dashboard"></i>
      <span slot="title">控制台</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-blog-posts-list"></i>
        <span>文章管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="handleMenuItem('/posts/add')"> <i class="el-icon-blog-new-post"></i> 新建文章</el-menu-item>
        <el-menu-item index="2-2" @click="handleMenuItem('/posts/index')"> <i class="el-icon-blog-list1"></i> 文章列表</el-menu-item>
        <el-menu-item index="2-3" @click="handleMenuItem('/pages/index')"> <i class="el-icon-blog-page"></i> 页面管理 </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3" @click="handleMenuItem('/category/index')">
      <i class="el-icon-blog-menu-nav"></i>
      <span slot="title">分类管理</span>
    </el-menu-item>
    <el-menu-item index="4" @click="handleMenuItem('/tag/index')">
      <i class="el-icon-blog-tag"></i>
      <span slot="title">标签管理</span>
    </el-menu-item>
    <el-menu-item index="5" @click="handleMenuItem('/comment/index')">
      <i class="el-icon-blog-comment"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="6" @click="handleMenuItem('/attachment/index')">
      <i class="el-icon-blog-attach"></i>
      <span slot="title">附件管理</span>
    </el-menu-item>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="6-1" @click="handleMenuItem('/config/index')"> <i class="el-icon-blog-config"></i> 站点设置</el-menu-item>
        <el-menu-item index="6-2" @click="handleMenuItem('/module/index')"> <i class="el-icon-blog-module"></i> 模块管理</el-menu-item>
        <el-menu-item index="6-3" @click="handleMenuItem('/plugin/index')"> <i class="el-icon-blog-plugin"></i> 插件管理 </el-menu-item>
        <el-menu-item index="6-3" @click="handleMenuItem('/theme/index')"> <i class="el-icon-blog-theme"></i> 主题管理 </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-blog-admin"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="8-1" @click="handleMenuItem('/member/index')"> <i class="el-icon-blog-config"></i> 管理员 </el-menu-item>
        <el-menu-item index="8-2" @click="handleMenuItem('/role/index')"> <i class="el-icon-blog-role"></i> 角色管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
  </el-aside>
</template>

<script>
  import router from '../router'

  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      initData() {

      },
      handleMenuItem(url) {
        if (url.substring(0,1) == '/') {
          router.push(url)
        }
      }
    }
  }
</script>
