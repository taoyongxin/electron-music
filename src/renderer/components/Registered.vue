<template>
 <div class="cc-col-center">
    <div class="head">
      <h1>新用户注册</h1>
    </div>
    <div class="body-class">
      <el-input placeholder="请输入账号" v-model="inputUser" class="inputUser-class cc-shadow"></el-input>
      <el-input placeholder="请输入密码" v-model="inputPassword" show-password class="inputUser-class cc-shadow"></el-input>
      <el-input placeholder="请再次输入密码，进行确认" v-model="inputPassword1" show-password class="inputUser-class cc-shadow"></el-input>
    </div>
    <div class="cc-df-between cc-mbottom card">
        <div>
      <el-input placeholder="请输入验证码" v-model="inputMessage" class="inputmsg-class cc-shadow"></el-input>
      <el-button @click="getCode()">{{msg}}</el-button>
        </div>
      <el-checkbox v-model="checked" style="margin-left:-40px">同意用户协议</el-checkbox>
    </div>
    <div>
      <el-button class="btn cc-shadow btn-class" @click="registered()">注册</el-button>
    </div>
              
  </div>
</template>

<script>
export default {
 name: 'Registered',
  data() {
    return {
        checked: true,
        inputUser:'',
        inputPassword:'',
        inputPassword1:'',
        inputMessage:'',
        msg:"获取验证码",
        timer:null,
		countdown:10,
		mobileistrue:false,
		passwordistrue:false
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      getCode() {
			if (this.inputUser.length != 11) {
				this.msg = '验证失败';
				this.btnDisabled = true;
				this.codeDisabled = true;
				if (!this.timer1) {  
					this.timer1 = setInterval(() => {
						clearInterval(this.timer1);
						this.msg = '获取验证码';
						this.timer1 = null;
						this.codeDisabled = false;
						this.btnDisabled = false;
					}, 1000);
				}
			} else {
				
				if (!this.timer) {
					this.sendmsg();
					this.timer = setInterval(() => {
						if (this.countdown > 0 && this.countdown <= 10) {
							this.countdown--;
							if (this.countdown !== 0) {
								this.codeDisabled = false;
								this.btnDisabled = true;
								this.msg = '重新发送（' + this.countdown + ')';
							} else {
								clearInterval(this.timer);
								this.msg = '获取验证码';
								this.countdown = 10;
								this.timer = null;
								this.codeDisabled = false;
								this.btnDisabled = false;
							}
						}
					}, 1000);
				}
			}
        },
        sendmsg() {
			let that = this;
			this.$axios({
				method: 'post',
				url: this.GLOBAL.baseUrl +'/userLogin/sms', //后端api
				/* 	header: {
							"Content-Type": "application/x-www-form-urlencoded"
						}, */
				data: {
					mobile: this.inputUser
				}
				/* headers: {
						'Access-Token': this.token //将token放在请求头带到后端
					} */
			}).then(res => {
				console.log(res);
			});
            },
            		wrong() {
				if (!/^1[3456789]\d{9}$/.test(this.inputUser)) {
					this.mobileistrue = false;
				}else{
					this.mobileistrue=true;
				}
			},
			passowrdwrong(){
				if(this.inputPassword===this.inputPassword1){
					this.passwordistrue=true
				}else{
					this.$message.error('两次密码输入不一致，请重新输入');
					this.passwordistrue=false
				}
			},

           registered(){
				let that = this;
				this.$axios({
					method: 'post',
					url: this.GLOBAL.baseUrl +'/userLogin/sms/check', //后端api
					data: {
						mobile: this.inputUser,
						sms: this.inputMessage
					}
				})
					.then(res => {
						this.wrong();
						this.passowrdwrong();
						if (res.data.msg == '成功'&&this.mobileistrue&&this.passwordistrue) {
							this.result()
						}
						if (res.data.msg == '验证码失效') {
							this.$message.error('验证码输入错误');
						} 
					})
					.catch(function(error) {
						console.log(error);
					});
            },
            result(){
                	let that = this;
				this.$axios({
					method: 'post',
					url: this.GLOBAL.baseUrl +'/userLogin/register', //后端api
					data: {
						mobile: this.inputUser,
						password: this.inputPassword
					}
				})
					.then(res => {
						if (res.data.msg == '成功') {
							this.$message({
							          message: '恭喜你，注册成功',
							          type: 'success'
							        });
							this.$router.push("/login")
						}
						if (res.data.msg == '数据已存在') {
							this.$message.error('账号已经存在');
						}
					})
					.catch(function(error) {
						console.log(error);
					});
            }
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
  width: 60%;
  margin-left: 20%;
  margin-bottom: 3%;
}
.btn-class{
  width: 390px;
  height:40px;
}
.inputmsg-class{
    width: 40%;
}
</style>
