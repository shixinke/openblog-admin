<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="head-title head-title-border">标签列表</div>
        <div class="search-form">
            <el-tag
              v-loading="loading"
              element-loading-text="拼命加载中"
              v-for="(tag, index) in tags"
              :key="tag.tagId"
              closable
              @close="handleDeleteTag(tag)"
              :type="tag.type">
              {{tag.tagName}}
              <el-popover
                placement="bottom-start"
                trigger="click">
                <el-form :inline="true"  size="small"  :model="editTagForm" :rules="rules" ref="editTagForm">
                  <el-form-item label="标签名称" prop="tagName">
                    <el-input  placeholder="标签名称" v-model="editTagForm.tagName"></el-input>
                  </el-form-item>
                  <el-form-item label="标签别名" prop="tagAlias">
                    <el-input  placeholder="标签别名" v-model="editTagForm.tagAlias"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="handleSaveTag(index)">保存</el-button>
                  </el-form-item>
                </el-form>
                <i class="el-icon-edit" @click="handleSelect(tag)"  slot="reference"></i>
              </el-popover>

            </el-tag>
            <el-button size="small" @click="handleShow"><i class="el-icon-plus"></i> 新建</el-button>
            <div   v-if="addTagLayerVisible">
              <el-row>
              <el-form :inline="true"  size="small" class="add-tag-form" :model="tagForm" :rules="rules" ref="tagForm">
                <el-form-item label="标签名称" prop="tagName">
                  <el-input  placeholder="标签名称" v-model="tagForm.tagName"></el-input>
                </el-form-item>
                <el-form-item label="标签别名" prop="tagAlias">
                  <el-input  placeholder="标签别名" v-model="tagForm.tagAlias"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="handleAddTag()">添加</el-button>
                  <el-button type="info" @click="resetForm('tagForm')">取消</el-button>
                </el-form-item>
              </el-form>
              </el-row>
            </div>

        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scope>
.el-tag{margin:0 5px;
  .el-icon-edit{margin-left:5px;cursor:pointer;
     &:hover{
       opacity:0.7;
       font-size:14px;
     }
  }
}
.add-tag-form{
  margin-top:15px;
  padding-top:15px;
  border-top:1px dashed #ccc;
}
</style>
<script>
  import topHeader from '../../components/header.vue'
  import leftMenu from '../../components/menu.vue'
  import router from '../../router'
  import http from '../../utils/http'


  export default {
    data() {
      return {
        tagTypes:['', 'success', 'info', 'warning', 'danger'],
        tags: [],
        selectedTag: {},
        addTagLayerVisible:false,
        tagForm:{
          tagName:'',
          tagAlias:''
        },
        editTagForm:{
          tagId:0,
          tagName:'',
          tagAlias:''
        },
        rules: {
          tagName: [
            { required: true, message: '请输入标签名称', trigger: 'blur' },
            { min: 3,  message: '长度在 3个字符以上', trigger: 'blur' }
          ],
          tagAlias: [
            { required: true, message: '请输入标签别名', trigger: 'blur' },
            { min: 3,  message: '长度在 3个字符以上', trigger: 'blur' }
          ]
        },
        loading: true
      }
    },
    components: {
      topHeader,
      leftMenu
    },
    computed:{

    },
    mounted() {
      this.initData()
    },
    created: function () {

    },
    methods: {
      initData() {
        this.getTagList()
      },
      parseTagList() {
        for (let i = 0; i< this.tags.length; i++) {
          this.tags[i].type = this.getTagType(i)
        }
      },
      handleShow() {
        this.addTagLayerVisible = true
      },
      handleSelect(tag) {
        this.editTagForm = Object.assign({}, tag);
      },
      handleDeleteTag(tag) {
        if (!tag || !tag.tagId || parseInt(tag.tagId) < 1 ) {
          this.$message({
            type: 'error',
            message: '请选择要删除的标签'
          });
          return false;
        }
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          http.post('/tag/delete', {id : tag.tagId}).then(response => {
            console.log('删除成功')
            for (let i=0; i< this.tags.length; i++) {
              if (this.tags[i].tagId == tag.tagId) {
                this.tags.splice(i, 1)
              }
            }
            this.parseTagList()
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSaveTag(index) {
        this.$refs.editTagForm[index].validate((valid) => {
          if (valid) {
            http.post('/tag/edit', this.editTagForm).then(response => {
              this.$message.success('修改成功')
              for (let i=0; i< this.tags.length; i++) {
                if (this.tags[i].tagId == this.editTagForm.tagId) {
                  this.tags[i].tagName = this.editTagForm.tagName
                  this.tags[i].tagAlias = this.editTagForm.tagAlias
                }
              }
              this.parseTagList()
            });
          } else {
            this.$message.error('验证失败')
          }
        });
      },
      getTagType(i) {
         let idx = i % this.tagTypes.length
         return this.tagTypes[idx]
      },
      getTagList(params) {
        http.post('/tag/lists', params).then(response => {
          this.tags = response.data
          this.parseTagList()
          this.loading = false
        });
      },
      handleAddTag() {
        this.$refs['tagForm'].validate((valid) => {
          if (valid) {
            console.log(this.tagForm)
            http.post('/tag/add', this.tagForm).then(response => {
              this.$message.success('添加成功')
              this.tags.push(response.data)
              this.parseTagList()
            });
          } else {
            this.$message.error('验证失败')
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
