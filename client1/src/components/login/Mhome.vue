<template>
  <div class="homePage" style="background-color: #111122">
    <el-container class="leftContainer">
      <el-aside width="200px" style="background-color: #2b283a">
        <div >
          <span>基本选项</span>
        </div>
        <hr>
        <el-menu
          style="background-color: #374355;width: 202px;"
          text-color="#9BA1AA"
          active-text-color="#47A1F8"
          unique-opened
        >
          <div style="background-color: #1c2738">
            <el-submenu index="1-1">
              <template slot="title">管理系统</template>
              <div style="background-color: #011327">
                <router-link to="/catalog/sector">
                  <el-menu-item index="1-1-1">部门信息</el-menu-item>
                </router-link>
                <router-link to="/catalog/doctorinfo">
                  <el-menu-item index="1-1-1">医生信息</el-menu-item>
                </router-link>
                <router-link to="/catalog/patientinfo">
                  <el-menu-item index="1-1-2">病人信息</el-menu-item>
                </router-link>
                <router-link to="/catalog/medinfo">
                  <el-menu-item index="1-1-2">药品信息</el-menu-item>
                </router-link>
                <router-link to="/catalog/bill">
                  <el-menu-item index="1-1-2">医令单</el-menu-item>
                </router-link>
                <router-link to="/catalog/Inpatient">
                  <el-menu-item index="1-1-2">住院管理</el-menu-item>
                </router-link>
                <router-link to="/catalog/Discharge">
                  <el-menu-item index="1-1-2">出院管理</el-menu-item>
                </router-link>
                <router-link to="/catalog/Find">
                  <el-menu-item index="1-1-2">其他</el-menu-item>
                </router-link>
              </div>
            </el-submenu>
          </div>
        </el-menu>
      </el-aside>

      <!-- 右侧 -->
      <el-container class="rightContainer">
        <!-- 顶部 -->
        <el-header class="headerContainer" >
        </el-header>

        <!-- 页面内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .homePage {
    display: flex;
    border: 1px solid #eee;
    margin: 0;
    min-height: 700px;
  }
  .leftContainer {
    flex: 2;
  }
  .rightContainer {
    flex: 8;
    background-color: #eeeeee;
  }
  .headerContainer {
    border-left: white 2px;
    background-color:#2b283a;
    text-align: right;
    font-size: 12px;
    height: 65px;
    vertical-align: middle;
  }
  aside{
    background-color: #376d8e;
  }span{
    font-family: 方正姚体;
    color: aliceblue;
    font-size: large;
     }
</style>
