<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="head-title head-title-border">
          <el-row :span="24">
            <div class="head-text">角色管理</div>
            <div class="head-toolbars">
              <el-button type="success" size="small" icon="el-icon-blog-add-roles" @click="handleShowAdd">添加角色</el-button>
            </div>
          </el-row>
        </div>
        <div class="search-form">
          <el-form :inline="true">

            <el-form-item label="角色名称">
              <el-input size="small" model="searchForm.roleName"  placeholder="角色名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="handleSearch"><i class="el-icon-search"></i> 查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-body">
          <el-table
            ref="multipleTable"
            :data="roleData"
            tooltip-effect="dark"
            stripe
            border
            header-row-class-name="table-header-row"
            style="width: 100%"
            size="smalls"
            :default-sort = "{prop: 'date', order: 'descending'}"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="角色ID"
              prop = "roleId"
              width="120">
            </el-table-column>
            <el-table-column
              prop="roleName"
              label="角色名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="desc"
              label="角色描述"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column  label="操作">
              <template slot-scope="scope">
                <a href="javascript:;" class="table-column-btn text-success" @click="handleEdit(scope.row)"><i class="el-icon-edit"></i></a>
                <a href="javascript:;" class="table-column-btn text-success" @click="handleGrant(scope.row)"><i class="el-icon-blog-grant"></i></a>
                <a href="javascript:;" class="table-column-btn text-danger" @click="handleDelete(scope.row)"><i class="el-icon-delete"></i></a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="page.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total">
          </el-pagination>
        </div>
      </el-main>
    </el-container>

    <el-dialog title="添加角色" :visible.sync="addDialogVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" size="small">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="desc">
          <el-input v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="授权">

        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="修改角色" :visible.sync="editDialogVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" size="small">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="desc">
          <el-input v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="授权">

        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
        searchForm:{
          roleName:''
        },
        ruleForm: {

        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        roleData:[],
        selectedRow:{},
        page:{
          current:1,
          pagesize:15,
          total:0
        },
        addDialogVisible : false,
        editDialogVisible : false,
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
      handleShowAdd(url) {
        this.addDialogVisible = true;
      },
      handleSearch() {

      },
      handleEdit() {
        this.editDialogVisible = true;
      },
      handleGrant() {

      },
      handleDelete() {

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
      },
      submitForm() {

      },
      resetForm() {

      },
      updateForm() {

      }
    }
  }
</script>
