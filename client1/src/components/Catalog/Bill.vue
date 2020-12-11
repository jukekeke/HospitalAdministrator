<template>
  <div class="mainBox">
    <el-row :gutter="20" class="orderTitle">
      <!--标题-->
      <el-col :span="2.5">
        <b>
          <i class="el-icon-s-data"></i>
        </b>
        <span>
          <b>医令单</b>
        </span>
      </el-col>
      <el-row>
        <el-col :span="4" :offset="1">
          <el-button type="primary" @click="dialogCreateVisible = true">添加医令单</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="primary" @click="dialogDeleteVisible = true">删除医令单</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="primary" @click="dialogUpdateVisible = true">修改医令单</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="primary" @click="dialogSelectVisible = true">查找医令单</el-button>
        </el-col>
      </el-row>
    </el-row>

    <!-- 订单汇总 -->
    <el-table :data="BillInfo" border>
      <el-table-column type="index" label="No." align="center"></el-table-column>
      <el-table-column prop="ino" label="医令单号" align="center"></el-table-column>
      <el-table-column prop="pno" label="病人编号" align="center"></el-table-column>
      <el-table-column prop="dno" label="医师编号" align="center"></el-table-column>
      <el-table-column prop="mno" label="药品编号" align="center"></el-table-column>
    </el-table>

    <!-- 新建订单 -->
    <el-dialog title="添加医令单" :visible.sync="dialogCreateVisible">
      <el-form id="#create" :model="create" ref="create" label-width="100px">
        <el-form-item label="医令单号" prop="Ino">
          <el-input v-model="create.ino"></el-input>
        </el-form-item>
        <el-form-item label="病人编号" prop="Pno">
          <el-input v-model="create.pno"></el-input>
        </el-form-item>
        <el-form-item label="医师编号" prop="Dno">
          <el-input v-model="create.dno" ></el-input>
        </el-form-item>
        <el-form-item label="药品编号" prop="Mno">
          <el-input v-model="create.mno"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCreateVisible = false">取 消</el-button>
        <el-button type="primary" @click="createBill">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 删除医令单 -->
    <el-dialog title="删除医令单" :visible.sync="dialogDeleteVisible">
      <el-form id="#removed" :model="removed" ref="removed" label-width="100px">
        <el-form-item label="医令单号" prop="Ino">
          <el-input v-model="removed.ino"></el-input>
        </el-form-item>
        <el-form-item label="病人编号" prop="Pno">
          <el-input :disabled="true" v-model="removed.pno"></el-input>
        </el-form-item>
        <el-form-item label="医师编号" prop="Dno">
          <el-input :disabled="true" v-model="removed.dno"></el-input>
        </el-form-item>
        <el-form-item label="药品编号" prop="Mno">
          <el-input :disabled="true" v-model="removed.mno"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="removedOrder">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 修改订单 -->
    <el-dialog title="修改医令单" :visible.sync="dialogUpdateVisible">
      <el-form id="#update" :model="update" ref="update" label-width="100px">
        <el-form-item label="医令单号" prop="Ino">
          <el-input v-model="update.ino"></el-input>
        </el-form-item>
        <el-form-item label="病人编号" prop="Pno">
          <el-input :disabled="true" v-model="update.pno"></el-input>
        </el-form-item>
        <el-form-item label="医师编号" prop="Dno">
          <el-input :disabled="true" v-model="update.dno"></el-input>
        </el-form-item>
        <el-form-item label="药品编号" prop="Mno">
          <el-input v-model="update.mno" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdateVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateOrder">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 查找订单 -->
    <el-dialog title="查找医令单" :visible.sync="dialogSelectVisible">

      <el-form id="#select" :model="select" ref="select" label-width="100px">
        <el-form-item label="医令单号" prop="Ino">
          <el-input v-model="select.ino"></el-input>
        </el-form-item>
        <el-form-item label="病人编号" prop="Pno">
          <el-input v-model="select.pno"></el-input>
        </el-form-item>
        <el-form-item label="医师编号" prop="Dno">
          <el-input v-model="select.dno"></el-input>
        </el-form-item>
        <el-form-item label="药品编号" prop="Mno">
          <el-input v-model="select.mno"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSelectVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectOrder">确 定</el-button>
      </div>
      <el-dialog  width="80%" title="查询结果" :visible.sync="dialogSelectinnerVisible" append-to-body>
        <el-table :data="SelectInfo" border>
          <el-table-column type="index" label="No." align="center"></el-table-column>
          <el-table-column prop="ino" label="医令单号" align="center"></el-table-column>
          <el-table-column prop="pno" label="病人编号" align="center"></el-table-column>
          <el-table-column prop="dno" label="医师编号" align="center"></el-table-column>
          <el-table-column prop="mno" label="药品编号" align="center"></el-table-column>
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
      createBill() {
        let data = this.create;
        console.log(data);
        this.$ajax.post('http://localhost:8080/bill/addBill', JSON.stringify(data),
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
      // 删除医令单
      removedOrder(){
        let data = this.removed;
        console.log(data);
        this.$ajax.post('http://localhost:8080/bill/deleteByIno', JSON.stringify(data),
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
      //更新医令单
      updateOrder() {
        let data = this.update;
        console.log(data);
        this.$ajax.post('http://localhost:8080/bill/upDataBill', JSON.stringify(data),
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
      //搜索医令单
      selectOrder(){
        let data =this.select;
        console.log(data);
        this.$ajax.post('http://localhost:8080/bill/findByIno',JSON.stringify(data),
          {
            headers: { 'Content-Type': 'application/json;charset=UTF-8'}
          }
        ).then(response => {
          console.log(response);
          this.SelectInfo.push(response.data[0]);
          this.dialogSelectinnerVisible=true;
          this.dialogSelectVisible=false;
          // this. BillInfo=
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
        url:'http://localhost:8080/bill/findAllBill',
      }).then(response=>{
        console.log(response.data);
        for(let i= 0; i<response.data.length;i++) {
          this.BillInfo.push(response.data[i]);
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
          ino:"",
          pno:"",
          dno:"",
          mno:""
        },
        removed:{
          ino:"",
          pno:"",
          dno:"",
          mno:""
        },
        update: {
          ino:"",
          pno:"",
          dno:"",
          mno:""
        },
        select:{
          ino:"",
          pno:"",
          dno:"",
          mno:""
        },
        BillInfo: [
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
