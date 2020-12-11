<template>
  <div>
    <el-container>
      <el-aside style="alignment: center;background-color: #111122">
        <el-form style="alignment: center;background-color:#111122;align-content: center" :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item>
            <!--v-model进行双向数据绑定，每当输入框的值发生变化，就会将改变的值传递给vmodel,默认把value定作为元素的属性然后把oninput作为改变属性的触发事件-->
            <input  style="background-color: #e4ebd7;width:200px;height: 30px" placeholder="用户名" v-model="loginForm.username" align="center"></input>
          </el-form-item>
          <el-form-item>
            <input type="password" style="background-color: #e4ebd7;width:200px;height: 30px" placeholder="密码" v-model="loginForm.password"></input>
          </el-form-item>
          <el-form-item>
            <button  style="background-color: #e4ebd7" @click="createOrder" >登录</button>
          </el-form-item>
        </el-form>
      </el-aside>
      <el-main style="background-color: #111122;border-left: #ffcb55;border-width: 2px">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </div>
</template>
<script>
    export default {
        name: "Login",
        data(){
          return{
            loginForm: {
              username: "",
              password: ""
            },
          }
        },
        methods: {
          open() {
            this.$message('这是一条消息提示');
          },
          open2() {
            this.$message({
              showClose: true,
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          },
          createOrder() {
            this.$ajax({
              method:'get',
              url:'http://localhost:8080/user/login',
              params: {
                name: this.loginForm.username,
                password: this.loginForm.password
              }
             }).then(response => {
               console.log(response);
               if (response.data == "success"){
                 this.open2();
                 this.$router.push('/mhome');
               }
              })
              .catch(function(error) {
                console.log("save failed！");
              });
          }
        }
    }
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background: radial-gradient(transparent 65%, #ff0488 100%), linear-gradient(#ff8811 0, #44ff00 100%);
  }
  .el-carousel__item:nth-child(2n) {
    background: radial-gradient(transparent 65%, #ffcb55 100%), linear-gradient(#002181 0, #ff0488 100%);
  }

  .el-carousel__item:nth-child(2n+1) {
    background: radial-gradient(transparent 65%, #111122 100%), linear-gradient(#002188 0, #ff0488 100%);
  }
  body{
    background-color:#111122;
  }
  .scene {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #112;
  }

  .container {
    position: relative;
    height: 30vw;
    width: 30vw;
    overflow: hidden;
  }

  .sun {
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    width: 25vw;
    height: 25vw;
    background: radial-gradient(transparent 65%, #ff0488 100%), linear-gradient(#ffcb55 0, #ff0488 100%);
    border-radius: 50%;
    -webkit-animation: hue-rotate 60s ease-in-out infinite 5s;
    animation: hue-rotate 60s ease-in-out infinite 5s;
  }

  .band {

    position: absolute;
    bottom: -6vw;
    width: 100%;
    height: 10%;
    background: #112;
    -webkit-animation: wave 10s linear infinite;
    animation: wave 10s linear infinite;
  }
  p{
    font-size: xx-large;
    color: #ffcb55;
    text-align: center;
    font-family: "Arial Black";
  }
  @-webkit-keyframes wave {
    0% {
      -webkit-transform: translateY(0) scaleY(1);
      transform: translateY(0) scaleY(1);
    }
    100% {
      -webkit-transform: translateY(-24vw) scaleY(0);
      transform: translateY(-24vw) scaleY(0);
    }
  }

  @keyframes wave {
    0% {
      -webkit-transform: translateY(0) scaleY(1);
      transform: translateY(0) scaleY(1);
    }
    100% {
      -webkit-transform: translateY(-24vw) scaleY(0);
      transform: translateY(-24vw) scaleY(0);
    }
  }
  @-webkit-keyframes hue-rotate {
    0% {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
    100% {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg);
    }
  }
  @keyframes hue-rotate {
    0% {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
    100% {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg);
    }
  }
  .item1{
    background: transparent;
    border: 3px #ff0488 ;
  }
aside{

  font-family: 方正姚体;
  font-size: large;
}
  header{

    font-family: 方正姚体;
    font-size: larger;
  }
  footer{
    font-family: 华文细黑;


  }
  p{
    font-family: 方正姚体;
    font-size: large;
  }
</style>
