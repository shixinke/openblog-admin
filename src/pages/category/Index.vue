<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="head-title head-title-border">
          <el-row :span="24">
            <div class="head-text">分类管理</div>
            <div class="head-toolbars">
              <el-button type="success" size="small" icon="el-icon-plus" @click="handleShowAdd()">添加分类</el-button>
            </div>
          </el-row>
        </div>
        <div class="search-form">
          <el-form :inline="true">

            <el-form-item label="上级分类">
              <el-select value="" size="small"  placeholder="上级分类">
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
          <el-table :data="categoryList"  max-height="250"
                    tooltip-effect="dark"
                    stripe
                    border
                    header-row-class-name="table-header-row"
                    :default-sort = "{prop: 'date', order: 'descending'}"
          >
            <el-table-tree-column
              file-icon="icon icon-file"
              folder-icon="icon icon-folder"
              type="selection" width="55"></el-table-tree-column>
            <el-table-column prop="categoryName" label="分类名称"   width="180"></el-table-column>
            <el-table-column prop="alias" label="分类别名"   width="180"></el-table-column>
            <el-table-column prop="status" label="状态"   width="180"></el-table-column>
            <el-table-column prop="sort" label="排序"   width="180"></el-table-column>
            <el-table-column prop="items" label="文章数"   width="180"></el-table-column>
            <el-table-column prop="alias" label="操作"   width="180">
              <template slot-scope="scope">
                <a href="javascript:;" class="table-column-btn text-success" @click="handleShowEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></a>
                <a href="javascript:;" class="table-column-btn text-danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></a>
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

        <el-dialog title="添加分类" :visible.sync="addDialogVisible" :rules="rules" :append-to-body="true" width="60%">
          <el-form :model="addForm" ref="addForm" label-width="100px" size="small">
            <el-form-item label="分类名称" prop="categoryName">
              <el-input v-model="addForm.categoryName">
              </el-input>
            </el-form-item>
            <el-form-item label="分类别名"  prop="alias">
              <el-input v-model="addForm.alias"></el-input>
            </el-form-item>
            <el-form-item label="上级分类">
              <el-select :value="addForm.parentId"　v-model="addForm.parentId" size="small"  placeholder="上级分类">
                <el-option label="" value="0" style="font-size:12px;"></el-option>
                <el-option
                  v-for="item in parentList"
                  :key="item.categoryId"
                  :label="item.categoryName"
                  :value="item.categoryId"
                  style="font-size:12px;">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标题"  prop="title">
              <el-input v-model="addForm.title"></el-input>
            </el-form-item>
            <el-form-item label="关键词"  prop="keywords">
              <el-input v-model="addForm.keywords"></el-input>
            </el-form-item>
            <el-form-item label="描述"  prop="description">
              <el-input type="textarea" v-model="addForm.description"></el-input>
            </el-form-item>
            <el-form-item label="排序"  prop="sort">
              <el-input-number v-model="addForm.sort"  :min="0"　 controls-position="right"  label="排序"></el-input-number>
            </el-form-item>
            <el-form-item label="是否启用"  prop="status">
              <el-switch
                v-model="addForm.status">
              </el-switch>
            </el-form-item>
            <el-form-item label="图标"  prop="icon">
              <select-icon url="/iconfont/lists" event-name="changIcon" :value="addForm.icon"></select-icon>
            </el-form-item>

          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" size="small" @click="handleEdit()">确 定</el-button>
            <el-button size="small">取 消</el-button>
          </span>
        </el-dialog>

        <el-dialog title="修改分类" :visible.sync="editDialogVisible" :rules="rules" :append-to-body="true" width="60%">
          <el-form :model="editForm" ref="editForm" label-width="100px" size="small">
            <el-form-item label="分类名称" prop="categoryName">
              <el-input v-model="editForm.categoryName">
              </el-input>
            </el-form-item>
            <el-form-item label="分类别名"  prop="alias">
              <el-input v-model="editForm.alias"></el-input>
            </el-form-item>
            <el-form-item label="上级分类">
              <el-select value=""　v-model="editForm.parentId" size="small"  placeholder="上级分类">
                <el-option label="" value="0" style="font-size:12px;"></el-option>
                <el-option
                  v-for="item in parentList"
                  :key="item.categoryId"
                  :label="item.categoryName"
                  :value="item.categoryId"
                  style="font-size:12px;">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标题"  prop="title">
              <el-input v-model="editForm.title"></el-input>
            </el-form-item>
            <el-form-item label="关键词"  prop="keywords">
              <el-input v-model="editForm.keywords"></el-input>
            </el-form-item>
            <el-form-item label="描述"  prop="description">
              <el-input type="textarea" v-model="editForm.description"></el-input>
            </el-form-item>
            <el-form-item label="排序"  prop="sort">
              <el-input-number v-model="editForm.sort"  :min="0"　 controls-position="right"  label="排序"></el-input-number>
            </el-form-item>
            <el-form-item label="是否启用"  prop="status">
              <el-switch
                v-model="editForm.status">
              </el-switch>
            </el-form-item>
            <el-form-item label="图标"  prop="icon">
              <select-icon url="/iconfont/lists" event-name="changIcon" value=""></select-icon>
            </el-form-item>

          </el-form>
          <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="handleEdit()">确 定</el-button>
        <el-button size="small">取 消</el-button>
      </span>
        </el-dialog>

      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">

</style>
<script>
  import topHeader from '../../components/header.vue'
  import leftMenu from '../../components/menu.vue'
  import selectIcon from '../../components/selecticon'
  import ElTableTreeColumn from  'element-tree-grid/src/table-column'
  import http from '../../utils/http'
  import router from '../../router'

  export default {
    data() {
      return {
        categoryList:[],
        parentList:[],
        addDialogVisible:false,
        editDialogVisible:false,
        addForm:{
          categoryName:'',
          alias:'',
          parentId:0,
          title:'',
          keywords:'',
          description:'',
          sort:0,
          status:0,
          icon:''
        },
        editForm:{
          categoryId:0,
          categoryName:'',
          alias:'',
          parentId:0,
          title:'',
          keywords:'',
          description:'',
          sort:0,
          status:0,
          icon:''
        },
        rules: {
          categoryName: [
            { required: true, message: '请输入分类名称', trigger: 'blur' },
            { min: 3,  message: '长度在 3个字符以上', trigger: 'blur' }
          ],
          alias: [
            { required: true, message: '请输入分类别名', trigger: 'blur' },
            { min: 3,  message: '长度在 3个字符以上', trigger: 'blur' }
          ]
        },
      }
    },
    components: {
      topHeader,
      leftMenu,
      selectIcon,
      ElTableTreeColumn
    },
    mounted() {
      this.initData()
    },
    created: function () {

    },
    methods: {
      initData() {
        this.getCategoryList()
      },
      getCategoryList() {
        http.post('/category/lists').then(response=>{
          this.categoryList = response.data
          for (let i=0; i< response.data.length; i++) {
            if (response.data[i].parentId == 0) {
              this.parentList.push(response.data[i])
            }
          }
        });
      },
      handleShowAdd() {
        this.addDialogVisible = true
      },
      handleShowEdit(index, row) {
        this.editForm = Object.assign({}, row)
        this.editDialogVisible = true
      },
      handleAdd() {
        http.post('/category/add', this.addForm).then(response=>{
          this.$message.success("添加成功");
          this.addDialogVisible = false
          this.getCategoryList()
        });
      },
      handleEdit() {
        http.post('/category/edit', this.editForm).then(response=>{
          this.$message.success("修改成功");
          this.editDialogVisible = false
          this.getCategoryList()
        });
      },
      handleDelete(index, row) {
        console.log(row)
        http.post('/category/delete', {id : row.categoryId}).then(response=>{
          this.$message.success("修改成功");
          this.categoryList.splice(index, 1)
        });
      },
      changeIcon(val) {
        if (this.addDialogVisible) {
          this.addForm.icon = val
        }
        if (this.editDialogVisible) {
          this.editForm.icon = val
        }

      }
    }
  }
</script>
