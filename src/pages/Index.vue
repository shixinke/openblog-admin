<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="home-main">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-row :gutter="10">
                <el-col :span="24" :style="{marginBottom: '10px'}">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <el-row>
                        <el-col :span="8">
                          <div class="el-avatar el-avatar-large"><img :src="pageData.user.avatar"></div>

                        </el-col>
                        <el-col class="card-title" :span="16">
                          {{pageData.user.nickname}}
                        </el-col>
                      </el-row>
                    </div>
                    <div class="text item basic-item">
                      <el-row class="margin-top-8">
                        <el-col :span="8"><p class="notwrap">上次登录时间:</p></el-col>
                        <el-col :span="16" class="padding-left-8">{{pageData.user.lastLoginTime}}</el-col>
                      </el-row>
                      <el-row class="margin-top-8">
                        <el-col :span="8"><p class="notwrap">上次登录地点:</p></el-col>
                        <el-col :span="16" class="padding-left-8">{{pageData.user.lastLoginLocation}} ({{pageData.user.lastLoginIp}})</el-col>
                      </el-row>
                      <el-row class="margin-top-8">
                        <el-col :span="8"><p class="notwrap">服务器版本 :</p></el-col>
                        <el-col :span="16" class="padding-left-8">{{pageData.sys.serverVersion}}</el-col>
                      </el-row>
                      <el-row class="margin-top-8">
                        <el-col :span="8"><p class="notwrap">框架版本:</p></el-col>
                        <el-col :span="16" class="padding-left-8">{{pageData.sys.version}}</el-col>
                      </el-row>
                      <el-row class="margin-top-8">
                        <el-col :span="8"><p class="notwrap">系统运行时间:</p></el-col>
                        <el-col :span="16" class="padding-left-8">{{pageData.sys.uptime}}</el-col>
                      </el-row>
                      <el-row class="margin-top-8">
                        <el-col :span="8"><p class="notwrap">共享字典容量:</p></el-col>
                        <el-col :span="16" class="padding-left-8">
                          {{formatDictCapacity}}
                        </el-col>
                      </el-row>
                      <el-row class="margin-top-8">
                        <el-col :span="8"><p class="notwrap">共享字典空闲空间:</p></el-col>
                        <el-col :span="16" class="padding-left-8"><el-progress :percentage="pageData.sys.dictFreeRate" ></el-progress></el-col>
                      </el-row>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="16">
              <el-row :gutter="10">
                <el-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                  <el-card class="info-card" :padding="0">
                    <div class="info-card-con height-100">
                      <el-col class="info-card-icon-con"
                              style="background-color: rgb(45, 140, 240); color: white; padding-left: 5px; padding-right: 5px;"
                              :span="8">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <i class="el-icon el-icon-blog-posts"></i>
                        </el-row>
                      </el-col>
                      <el-col :span="16" class="height-100">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <div>
                            <p style="text-align: center; color: rgb(45, 140, 240); font-size: 30px; font-weight: 700;">
                              <span>{{pageData.total.posts}}</span><span></span></p>
                            <p class="info-intro-text" slot="intro"> 总文章数 </p>
                          </div>
                        </el-row>
                      </el-col>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                  <el-card class="info-card" :padding="0">
                    <div class="info-card-con height-100">
                      <el-col class="info-card-icon-con"
                              style="background-color: rgb(100, 213, 114); color: white; padding-left: 5px; padding-right: 5px;"
                              :span="8">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <i class="el-icon el-icon-blog-tag"></i>
                        </el-row>
                      </el-col>
                      <el-col :span="16" class="height-100">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <div>
                            <p style="text-align: center; color: rgb(100, 213, 114); font-size: 30px; font-weight: 700;">
                              <span>{{pageData.total.tags}}</span><span></span></p>
                            <p class="info-intro-text" slot="intro"> 总标签数 </p>
                          </div>
                        </el-row>
                      </el-col>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                  <el-card class="info-card" :padding="0">
                    <div class="info-card-con height-100">
                      <el-col class="info-card-icon-con"
                              style="background-color: rgb(255, 213, 114); color: white; padding-left: 5px; padding-right: 5px;"
                              :span="8">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <i class="el-icon el-icon-blog-views"></i>
                        </el-row>
                      </el-col>
                      <el-col :span="16" class="height-100">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <div>
                            <p style="text-align: center; color: rgb(255, 213, 114); font-size: 30px; font-weight: 700;">
                              {{pageData.total.views}}
                            </p>
                            <p class="info-intro-text" slot="intro"> 浏览总数 </p>
                          </div>
                        </el-row>
                      </el-col>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                  <el-card class="info-card" :padding="0">
                    <div class="info-card-con height-100">
                      <el-col class="info-card-icon-con"
                              style="background-color: rgb(242, 94, 67); color: white; padding-left: 5px; padding-right: 5px;"
                              :span="8">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <i class="el-icon el-icon-blog-comment"></i>
                        </el-row>
                      </el-col>
                      <el-col :span="16" class="height-100">
                        <el-row type="flex" align="middle" justify="center" class="height-100">
                          <div>
                            <p style="text-align: center; color: rgb(242, 94, 67); font-size: 30px; font-weight: 700;">
                              <span>{{pageData.total.comments}}</span><span></span></p>
                            <p class="info-intro-text" slot="intro"> 评论总数 </p>
                          </div>
                        </el-row>
                      </el-col>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row :style="{marginBottom: '10px'}">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>系统信息</span>
                  </div>
                  <div  class="text item">
                    <el-row>
                      <el-col :span="8" align="middle">
                        <el-progress type="circle" :percentage="pageData.sys.memoryUsedRate"></el-progress>
                        <el-row >内存使用情况</el-row>
                      </el-col>
                      <el-col :span="8" align="middle">
                        <el-progress type="circle" :percentage="pageData.sys.sysDiskUsedRate"></el-progress>
                        <el-row >系统盘使用情况</el-row>
                      </el-col>
                      <el-col :span="8" align="middle">
                        <el-progress type="circle" :percentage="pageData.sys.dataDiskUsedRate"></el-progress>
                        <el-row >数据盘使用情况</el-row>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-row>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="margin-top-10">
            <el-col :md="24" :lg="8" :style="{marginBottom: '10px'}">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>最热专题统计</span>
                </div>
                <div class="text item">
                  <ve-pie :data="topicData" :settings="topicSettings"></ve-pie>
                </div>
              </el-card>
            </el-col>
            <el-col :md="24" :lg="8" :style="{marginBottom: '10px'}">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>最热标签统计</span>
                </div>
                <div class="text item">
                  <ve-pie :data="tagData" :settings="tagSettings"></ve-pie>
                </div>
              </el-card>
            </el-col>
            <el-col :md="24" :lg="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>最热分类统计</span>
                </div>
                <div class="text item">
                  <ve-pie :data="categoryData" :settings="categorySettings"></ve-pie>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="margin-top-10">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>请求统计/连接数统计</span>

              </div>
              <div class="text item">
                <ve-line :data="connectionData" :settings="connectionSettings"></ve-line>
              </div>
            </el-card>
          </el-row>

        </div>

      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">
  .card-title {
    font-size: 2em;
    color: #2d8cf0;
  }
  .basic-item{
    line-height:25px;
  }

  .margin-top-8 {
    margin-top: 8px;
  }
</style>
<script>
  import topHeader from '../components/header.vue'
  import leftMenu from '../components/menu.vue'
  import router from '../router'
  import http from '../utils/http'
  import formatter from '../utils/formatter'

  export default {
    data() {
      return {
        pageData : {
          user:{
            nickname :'',
            avatar :'',
            lastLoginTime:'',
            lastLoginIp:'',
            lastLoginLocation:''
          },
          sys:{
            serverVersion:'',
            version:'',
            uptime:'',
            workCount:0,
            dictFreeSpace:0,
            dictCapacity:0,
            dictFreeRate:0,
            memoryUsedRate:0,
            sysDiskUsedRate:0,
            dataDiskUsedRate:0
          },
          total:{
            posts:0,
            tags:0,
            comments:0,
            views:0
          }
        },
        topicData:{},
        topicSettings:{},
        tagData:{},
        tagSettings:{},
        categoryData:{},
        categorySettings:{},
        connectionData:{
          columns: ['时间', '连接数', '等待连接数'],
          rows: []
        },
        connectionSettings:{}
      }
    },
    components: {
      topHeader,
      leftMenu
    },
    mounted() {
      this.initData()
    },
    computed:{
      formatDictCapacity:function() {
        return formatter.byteFormat(this.pageData.sys.dictCapacity)
      }
    },
    created: function () {
      this.topicData = {
        columns: ['话题', '文章数', '浏览量', '占比', '其他'],
        rows: [
          { '话题': 'openresty技术栈', '文章数': 1523, '浏览量': 1523, '占比': 0.12, '其他': 100 },
          { '话题': 'go标准库', '文章数': 1223, '浏览量': 1523, '占比': 0.345, '其他': 100 },
          { '话题': 'yaf实战手册', '文章数': 2123, '浏览量': 1523, '占比': 0.7, '其他': 100 },
          { '话题': 'vue实战', '文章数': 4123, '浏览量': 1523, '占比': 0.31, '其他': 100 }
        ]
      }
      this.topicSettings = {
        dimension: '话题',
        metrics: '文章数',
        dataType: 'KMB',
        selectedMode: 'single',
        hoverAnimation: false,
        radius: 100,
        offsetY: 200
      },
        this.tagData = {
          columns: ['话题', '文章数', '浏览量', '占比', '其他'],
          rows: [
            { '话题': 'openresty技术栈', '文章数': 1523, '浏览量': 1523, '占比': 0.12, '其他': 100 },
            { '话题': 'go标准库', '文章数': 1223, '浏览量': 1523, '占比': 0.345, '其他': 100 },
            { '话题': 'yaf实战手册', '文章数': 2123, '浏览量': 1523, '占比': 0.7, '其他': 100 },
            { '话题': 'vue实战', '文章数': 4123, '浏览量': 1523, '占比': 0.31, '其他': 100 }
          ]
        }
      this.tagSettings = {
        dimension: '话题',
        metrics: '文章数',
        dataType: 'KMB',
        selectedMode: 'single',
        hoverAnimation: false,
        radius: 100,
        offsetY: 200
      },
        this.categoryData = {
          columns: ['话题', '文章数', '浏览量', '占比', '其他'],
          rows: [
            { '话题': 'openresty技术栈', '文章数': 1523, '浏览量': 1523, '占比': 0.12, '其他': 100 },
            { '话题': 'go标准库', '文章数': 1223, '浏览量': 1523, '占比': 0.345, '其他': 100 },
            { '话题': 'yaf实战手册', '文章数': 2123, '浏览量': 1523, '占比': 0.7, '其他': 100 },
            { '话题': 'vue实战', '文章数': 4123, '浏览量': 1523, '占比': 0.31, '其他': 100 }
          ]
        },
      this.categorySettings = {
        dimension: '话题',
        metrics: '文章数',
        dataType: 'KMB',
        selectedMode: 'single',
        hoverAnimation: false,
        radius: 100,
        offsetY: 200
      }
    },
    methods: {
      initData() {
        http.post('/dashboard/stats', this.user).then(response => {
          console.log(response.data)
          let response_data = response.data
          this.pageData = response_data;
          this.pageData.sys.dictFreeRate = this.rateFormat(response_data.sys.dictFreeSpace, response_data.sys.dictCapacity)
          this.pageData.sys.memoryUsedRate = this.rateFormat(response_data.sys.memory.used, response_data.sys.memory.total)
          this.pageData.sys.sysDiskUsedRate = this.rateToNumber(response_data.sys.sysDisk.rate)
          this.pageData.sys.dataDiskUsedRate = this.rateToNumber(response_data.sys.dataDisk.rate)
        })
        this.getConnections();
      },
      getConnections() {
        var _self = this
        this.getConnection()
        setInterval(function(){
          _self.getConnection()
        }, 30000);
      },
      getConnection(){
        var _self = this
        http.get('/dashboard/connections').then(response => {
          if (_self.connectionData.rows.length >= 24) {
            _self.connectionData.rows.unshift()
          }
          let row = {"时间":response.data.datetime, "连接数":response.data.connectionsActive, '等待连接数':response.data.connectionsWaiting}
          _self.connectionData.rows.push(row)

        });
      },
      rateFormat(num, total) {
        return parseFloat(((num / total) * 100).toFixed(2))
      },
      rateToNumber(rate) {
        let pos = rate.lastIndexOf('%')
        if (pos > 0) {
          return parseFloat(rate.substring(0, pos))
        }
        return parseFloat(rate)
      }
    }
  }
</script>
