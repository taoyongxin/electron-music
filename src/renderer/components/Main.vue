<template>
<div class="container">
  <div class="top0">
    <input class="input" placeholder="请输入内容" />
    <img class="picture1 jl" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/音乐 (3).png" />
    <div class="top-right">
      <img
        class="picture1"
        style="border-radius:50%"
        src="https://niit-student.oss-cn-beijing.aliyuncs.com/markdown/music.png"
      />
      <p class="jl">{{user.userName}}</p>
      <button @click="login()" v-if="user.id==null">登录</button>
      <button @click="clear()" v-if="user.id!=null">注销</button>
    </div>
  </div>
  <br />
  <body>
    <div class="card-head cc-df">
      <div>
        <img
          class="img"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/20200403160756.png"
        />
      </div>
      <div class="cc-col address">
        <h2>今日私享</h2>
        <div class="cc-center">
          <p>添加标签</p>
        </div>
        <div class="cc-content">
          <p>精心完善歌单信息有机会获得推荐，让更多用户看到你的大作</p>
        </div>
        <div class="cc-btn">
          <button class="btn cc-mright" style="background-color:#1ecd97;color:#fff;">播放全部</button>
          <button class="btn" style="background-color:#e1e1e1;" @click="bathadd()" v-if="istrue">批量收藏</button>
          <button class="btn" style="background-color:#e1e1e1;" @click="bathadd()" v-if="!istrue">确认收藏</button>
        </div>
      </div>
    </div>
    <div class="card-body cc-col">
      <div class="cc-df">
        <h4 class="cc-mright">歌曲</h4>
        <h4>评论</h4>
      </div>
              <div class="music-card">
            <div class="card1"><p>排行</p></div>
            <div class="card"><p>歌曲名称</p></div>
            <div class="card"><p>歌曲作者</p></div>
            <div class="card"><p>歌曲类型</p></div>
        </div>
      <div v-for="(item,index) in musics" :key="index">
        <div class="music-card">
            <div class="card1">
              <p @click="add(item.id)" v-if="istrue">{{item.id}}</p>
              <md-checkbox v-model="array" :value="item.id" v-if="!istrue"></md-checkbox>
            </div>
            <div class="card"><p>{{item.name}}</p></div>
            <div class="card"><p>{{item.author}}</p></div>
            <div class="card"><p>{{item.type}}</p></div>
        </div>
      </div>
    </div>
  </body>
</div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      users: "",
      musics:[],
      page:1,
      size:5,
      istrue:true,
      array:[]
    };
  },
  components: {},
  created() {
    this.$axios({
      method: "post",
      url: this.GLOBAL.baseUrl + "/music/all",
      data: {
        currentPage: this.page,
        pageSize: this.size
      }
    })
      .then(res => {
        this.musics = res.data.data;
        console.log(this.musics);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {},
  methods: {
    bathadd(){
      console.log(this.array)
     if(this.istrue){
       this.istrue=!this.istrue
     }else{
       this.istrue=!this.istrue
     }
    },
    add(index){
         this.$axios({
      method: "post",
      url: this.GLOBAL.baseUrl + "/userMusic/like",
      data: {
        	musicId:index,
	        userId: this.user.id
      }
    })
      .then(res => {
        console.log(res.data.msg);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    clear() {
      this.user.id = null;
      this.user.userName = null;
      console.log(this.user);
    },
    login() {
      this.$router.push("/login");
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.card{
  margin-left: 25px;
  margin-right: 20px;
  width: 180px;
}
.card1{
  margin-left: 25px;
  margin-right: 20px;
  width: 50px;
}
.picture{
width: 40px;
height: 30px;
}
.jl{
  margin-left: 3%;
}
.music-card{
  display: flex;
  padding: 2px 10px 2px 1px;
  width: 750px;
}
.btn {
  border: none;
  border-radius: 20px;
  width: 90px;
  height: 30px;
}
.cc-btn {
  padding: 0 5% 0 0;
  display: flex;
  margin-top: 3%;
  width: 120%;
  height: 35px;
  background-color: #fff;
}
.cc-content {
  font-size: 10px;
  margin: 14% 0 0 1%;
  width: 150%;
  height: 20px;
  background-color: #fff;
}
.cc-center {
  font-size: 10px;
  position: absolute;
  top: 25px;
  margin: 0 0 0 -12px;
  width: 70px;
  height: 20px;
  background-color: #fff;
}
.address {
  margin-left: -140px;
}
.top0 {
  position: absolut;
  margin-top: -40px;
  display: flex;
  padding: 3px 5px 0 10px;
  margin-left: -1px;
  width: 800px;
  height: 37px;
  background-color: #fff;
}
.top-right {
  display: flex;
  margin-left: 360px;
  width: 255px;
  height: 30px;
  background-color: #ffffff;
}
.input {
  background-color: #e0e0e0;
  border: none;
  width: 120px;
  height: 27px;
  border-radius: 15px;
}
.picture1 {
  width: 30px;
  height: 30px;
}
.jl {
  padding: 2px 5px 1px 5px;
}
.container {
  position: absolute;
  top: 50px;
  left: 17%;
  width: 80%;
  right: 0px;
  min-height: 500px;
  background-color: #fff;
}
.card-head {
  margin-left: 20px;
}
.img {
  width: 40%;
}
.card-body {
  margin-top: 10px;
  margin-left: 20px;
}
</style>
