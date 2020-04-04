<template>
  <div class="cc-col-center">
    <div class="head">
      <h1>音乐分享</h1>
    </div>
    <div class="body-class">
      <el-input placeholder="请输入账号" v-model="inputUser" class="inputUser-class cc-shadow"></el-input>
      <el-input placeholder="请输入密码" v-model="inputPassword" show-password class="inputUser-class cc-shadow"></el-input>
    </div>
    <div class="cc-df-between cc-mbottom" >
      <el-checkbox v-model="checked" style="margin-right:180px">记住密码</el-checkbox>
      <router-link to="/registered" >注册新用户</router-link>
    </div>
    <div>
      <el-button class="btn cc-shadow btn-class" @click="signin()">登录</el-button>
    </div>
              
  </div>
</template>

<script>
export default {
 name: 'Login',
  data() {
    return {
      inputPassword:'',
      inputUser:'',
      checked: true
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    signin() {
			let that = this;
			this.$axios({
				method: 'post',
				url: this.GLOBAL.baseUrl +'/userLogin/login', //后端api
				data: {
					mobile: this.inputUser,
					password: this.inputPassword
				}
			})
				.then(res => {
					console.log(res.data.msg);
					if (res.data.msg == '成功') { 
		                this.GLOBAL.user = res.data.data
						localStorage.setItem('user', JSON.stringify(res.data.data));
						this.$message({
						          message: '恭喜你，登录成功',
						          type: 'success'
						        });
						this.$router.push("/index")
					}
					if (res.data.msg == '账号错误') {
					this.$message.error('账号错误');
					}
					if (res.data.msg == '密码错误') {
						this.$message.error('密码错误');
					} 
				})
				.catch(function(error) {
					console.log(error);
				});
		},
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.head{
  margin-top: 10%;
}
.body-class{
  margin-top: 3%;
}
.inputUser-class{
  width: 80%;
  margin-left: 10%;
  margin-bottom: 3%;
}
.btn-class{
  width: 350px;
  height:40px;
  
}
</style>
