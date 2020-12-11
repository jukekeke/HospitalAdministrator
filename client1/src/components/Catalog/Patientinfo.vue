<template>
  <div class="mainBox">
    <el-row :gutter="20" class="orderTitle">
      <!--标题-->
      <el-col :span="2.5">
        <b>
          <i class="el-icon-s-data"></i>
        </b>
        <span>
          <b>病人信息</b>
        </span>
      </el-col>
      <el-row>
        <el-col :span="4" :offset="1">
          <el-button  style="background-color: dimgrey" type="primary" @click="dialogCreateVisible = true">添加</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button style="background-color: dimgrey" type="primary" @click="dialogDeleteVisible = true">删除</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button style="background-color: dimgrey" type="primary" @click="dialogUpdateVisible = true">修改</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button style="background-color: dimgrey" type="primary" @click="dialogSelectVisible = true">查找</el-button>
        </el-col>
      </el-row>
    </el-row>
    <!-- 订单汇总 -->
    <el-table :data="Pinfo" border>
      <el-table-column type="index" label="No." align="center"></el-table-column>
      <el-table-column prop="pno" label="编号" align="center"></el-table-column>
      <el-table-column prop="pname" label="姓名" align="center"></el-table-column>
      <el-table-column prop="page" label="年龄" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" align="center"></el-table-column>
      <el-table-column prop="pphone" label="电话" align="center"></el-table-column>
      <el-table-column prop="sector" label="就诊部门" align="center"></el-table-column>
    </el-table>

    <!-- 新建订单 -->
    <el-dialog title="添加病人信息" :visible.sync="dialogCreateVisible">
      <el-form id="#create" :model="create" ref="create" label-width="100px">
        <el-form-item label="编号" prop="pno">
          <el-input v-model="create.pno"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="panme">
          <el-input v-model="create.pname"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="page">
          <el-input v-model="create.page" ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="create.sex"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="pphone">
          <el-input v-model="create.pphone"></el-input>
        </el-form-item>
        <el-form-item label="就诊部门" prop="sector">
          <el-input v-model="create.sector"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCreateVisible = false">取 消</el-button>
        <el-button type="primary" @click="createone">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 删除 -->
    <el-dialog title="删除" :visible.sync="dialogDeleteVisible">
      <el-form id="#removed" :model="removed" ref="removed" label-width="100px">
        <el-form-item label="编号" prop="pno">
          <el-input v-model="removed.pno"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="Pno">
          <el-input :disabled="true" v-model="removed.pname"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="page">
          <el-input :disabled="true" v-model="removed.page"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input :disabled="true" v-model="removed.sex"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="pphone">
          <el-input :disabled="true" v-model="removed.pphone"></el-input>
        </el-form-item>
        <el-form-item label="就诊部门" prop="sector">
          <el-input :disabled="true" v-model="removed.sector"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="removedOrder">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 修改订单 -->
    <el-dialog title="修改病人信息" :visible.sync="dialogUpdateVisible">
      <el-form id="#update" :model="update" ref="update" label-width="100px">
        <el-form-item label="编号" prop="pno">
          <el-input v-model="update.pno"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="Pno">
          <el-input :disabled="true" v-model="update.pname"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="page">
          <el-input :disabled="true" v-model="update.page"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input :disabled="true" v-model="update.sex" ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="pphone">
          <el-input v-model="update.pphone" ></el-input>
        </el-form-item>
        <el-form-item label="就诊部门" prop="sector">
          <el-input disabled="true" v-model="update.sector" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdateVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateOrder">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 查找订单 -->
    <el-dialog title="查找病人信息" :visible.sync="dialogSelectVisible">
      <el-form id="#select" :model="select" ref="select" label-width="100px">
        <el-form-item label="编号" prop="pno">
          <el-input v-model="select.pno"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="Pno">
          <el-input  disabled="true" v-model="select.pname"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="page">
          <el-input disabled="true" v-model="select.page"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input disabled="true" v-model="select.sex"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="pphone">
          <el-input disabled="true" v-model="select.pphone"></el-input>
        </el-form-item>
        <el-form-item label="就诊部门" prop="sector">
          <el-input disabled="true" v-model="select.sector"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSelectVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectOrder">确 定</el-button>
      </div>
      <el-dialog  width="80%" title="查询结果" :visible.sync="dialogSelectinnerVisible" append-to-body>
        <el-table :data="SelectInfo" border>
          <el-table-column type="index" label="No." align="center"></el-table-column>
          <el-table-column prop="pno" label="编号" align="center"></el-table-column>
          <el-table-column prop="pname" label="姓名" align="center"></el-table-column>
          <el-table-column prop="page" label="年龄" align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" align="center"></el-table-column>
          <el-table-column prop="pphone" label="电话" align="center"></el-table-column>
          <el-table-column prop="sector" label="就诊部门" align="center"></el-table-column>

        </el-table>
      </el-dialog>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "MainBox",
    inject:['reload'],
    methods: {
      // 新建订单
      createone() {
        let data = this.create;
        console.log(data);
        this.$ajax.post('http://localhost:8080/pinfo/addone', JSON.stringify(data),
          {
            headers: { 'Content-Type': 'application/json;charset=UTF-8'}
          }
        ).then(response=> {
          console.log(response);
          this.dialogCreateVisible=false;
          this.open2();
        }).catch(function (error){
          console.log("save failed！")
        });
      },
      // 删除
      removedOrder(){
        let data = this.removed;
        console.log(data);
        this.$ajax.post('http://localhost:8080/pinfo/deleteone', JSON.stringify(data),
          {
            headers: { 'Content-Type': 'application/json;charset=UTF-8'}
          }
        ).then(response => {
          console.log(response);
          this.dialogDeleteVisible=false;
          this.open1();
          this.reload();

        }).catch(function (error){
          console.log("delete failed!")
        });

      },
      //更新
      updateOrder() {
        let data = this.update;
        console.log(data);
        this.$ajax.post('http://localhost:8080/pinfo/updateone', JSON.stringify(data),
          {
            headers: { 'Content-Type': 'application/json;charset=UTF-8'}
          }
        ).then(response=> {
          console.log(response);
          this.dialogUpdateVisible=false;
          this.open3();
          this.reload();
        }).catch(function (error){
          console.log("update failed！")
        });
      },
      //搜索
      selectOrder(){
        let data =this.select;
        console.log(data);
        this.$ajax.post('http://localhost:8080/pinfo/findone',JSON.stringify(data),
          {
            headers: { 'Content-Type': 'application/json;charset=UTF-8'}
          }
        ).then(response => {
          console.log(response);
          this.SelectInfo.push(response.data[0]);
          this.dialogSelectinnerVisible=true;
          this.dialogSelectVisible=false;
          // this. Pinfo=
          this.open5();
          this.reload();
        }).catch(function (error){
          console.log("select failed!")
        });
      },
      open1() {
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        });
        this.reload();
      },
      open2() {
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        });
        this.reload();
      },
      open3() {
        this.$message({
          message: '恭喜你，修改成功',
          type: 'success'
        });
      },
      open4() {
        this.$message({
          message: '恭喜你，修改成功',
          type: 'warning'
        });
      },
      open5() {
        this.$message({
          message: '恭喜你，查找成功',
          type: 'success'
        });
      },
    },
    mounted(){
      // 加载数据
      console.log("loading data.")
      this.$ajax({
        method:'get',
        url:'http://localhost:8080/pinfo/findall',
      }).then(response=>{
        console.log(response.data);
        for(let i= 0; i<response.data.length;i++) {
          this.Pinfo.push(response.data[i]);
        }
      });
    },
    data() {
      return {
        dialogCreateVisible: false,
        dialogDeleteVisible: false,
        dialogSelectVisible: false,
        dialogUpdateVisible: false,
        dialogSelectinnerVisible:false,
        create: {
          pno:"",
          pname:"",
          page:"",
          sex:"",
          pphone:"",
          sector:""
        },
        removed:{
          pno:"",
          pname:"",
          dname:"",
          sex:"",
          pphone:"",
          sector:""
        },
        update: {
          pno:"",
          pname:"",
          page:"",
          sex:"",
          pphone:"",
          sector:""
        },
        select:{
          pno:"",
          pname:"",
          page:"",
          sex:"",
          pphone:"",
          sector:""
        },
        Pinfo: [
        ],
        SelectInfo:[
        ],
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .orderTitle {
    border-bottom: 2px #409eff solid;
    font-size: 24px;
    padding-bottom: 10px;
  }
</style>
