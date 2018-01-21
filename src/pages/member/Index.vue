<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="head-title head-title-border">
          <el-row :span="24">
          <div class="head-text">用户管理</div>
          <div class="head-toolbars">
            <el-button type="success" size="small" icon="el-icon-plus">添加用户</el-button>
          </div>
          </el-row>
        </div>
        <div class="search-form">
          <el-form :inline="true">

            <el-form-item label="用户级别">
              <el-select value="" size="small"  placeholder="分类">
                <el-option label="分类一" value="shanghai" style="font-size:12px;"></el-option>
                <el-option label="分类二" value="beijing" style="font-size:12px;"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="账号">
              <el-input size="small"  placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small"><i class="el-icon-search"></i> 查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-body">
          <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            stripe
            border
            header-row-class-name="table-header-row"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="用户ID"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="用户级别"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="账号"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="昵称"
              show-overflow-tooltip>
              <el-table-column
                prop="address"
                label="邮箱"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="手机号"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="文章数"
                show-overflow-tooltip>
                <el-table-column
                  prop="address"
                  label="上次登录时间"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="上次登录IP"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table-column>
              <el-table-column
                prop="address"
                label="账号"
                show-overflow-tooltip>
              </el-table-column>
            </el-table-column>
            <el-table-column  label="操作">
              <template slot-scope="scope">
                <a href="javascript:;" class="table-column-btn text-success"><i class="el-icon-edit"></i></a>
                <a href="javascript:;" class="table-column-btn text-danger"><i class="el-icon-delete"></i></a>
              </template>
            </el-table-column>
          </el-table>
          <div class="">
            <el-form :inline="true">

              <el-form-item>
                <el-select value="" size="small"  placeholder="修改其级别为">
                  <el-option label="分类一" value="shanghai" style="font-size:12px;"></el-option>
                  <el-option label="分类二" value="beijing" style="font-size:12px;"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-select value="" size="small"  placeholder="将其状态置为">
                  <el-option label="标签一" value="shanghai" style="font-size:12px;"></el-option>
                  <el-option label="标签二" value="beijing" style="font-size:12px;"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small"> 操作</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">

</style>
<script>
  import topHeader from '../../components/header.vue'
  import leftMenu from '../../components/menu.vue'
  import router from '../../router'

  export default {
    data() {
      return {
        value:'',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    components: {
      topHeader,
      leftMenu
    },
    mounted() {
      this.initData()
    },
    created: function () {

    },
    methods: {
      initData() {

      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
