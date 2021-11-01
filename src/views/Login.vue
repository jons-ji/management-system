<template>
<div class="Login">
  <div class="Login_login">
    <h1>舆情监控系统后台管理</h1>
    <div class="login-input">
      <div class="input-text">
        用户名:<input type="text"  v-model="username"/>
      </div>
      <div class="input-text">
        密码:<input type="password" v-model="password"/>
      </div>
      <div class="input-text">
        验证码:<input class="passwo" type="text" v-model="verify"/>
        <span @click="getLoginData">
          <p v-html="svgImg"></p>
        </span>
      </div>
      <button class="button" @click="AddLogin">进入管理中心</button>
    </div>
    <div class="icon-img">
      <img src="../assets/zhizu.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      svgImg:"",
      username:"admin",
      password:123456,
      verify:"",
      svgKey:""
    }
  },
  methods:{
    getLoginData(){
      var api = "http://yuqing.itying.com/api/captcha"
      this.$axios.get(api).then(({data}) => {
        // console.log(data);
        this.svgImg=data.svgImg;
        this.svgKey=data.svgKey;
      })
    },
    AddLogin(){
      let param = new URLSearchParams()
        param.append("username",this.username)
        param.append("password",this.password)
        param.append("verify", this.verify)
        param.append("svgKey", this.svgKey)
      this.$axios.post("http://yuqing.itying.com/api/doLogin",param).then(({data}) => {
        console.log(data);
        if(data.success){
          this.$router.push({
            name:'Home',
          })
          localStorage.getItem('information',JSON.stringify(data))
        }
      });
    },
  },
  watch:{
    $route:{
      handler(){
        this.getLoginData()
      },
      immediate:true
    }
  },
}
</script>

<style scoped>
  .Login{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: darkblue;
  }
  .Login_login{
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    background: #eeeffc;
  }
  .Login_login h1{
    padding: 20px 10px;
    text-align: left;
  }
  .login-input{
    width: 500px;
    height: 350px;
    line-height: 4;
    text-align: right;
    float: left;
    overflow: hidden;
  }
  .login-input input{
    width: 400px;
    height: 30px;
  }
   .login-input .passwo{
    width: 150px;
    height: 30px;
  }
   .login-input span{
    position: relative;
    top: 15px;
    margin-right: 120px;
    display: inline-block;
    width: 130px;
    height: 70px;
    text-align: left;
  }
  .button{
    background-color: sandybrown;
    margin: 30px 100px;
    width: 180px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .icon-img{
    width: 350px;
    height: 350px;
    margin-right: 60px;
    float: right;
    overflow: hidden;
  }
  .icon-img img{
    width: 100%;
    height: 100%;
  }
</style>