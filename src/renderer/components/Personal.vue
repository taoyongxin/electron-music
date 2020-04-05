<template>
  <div class="container">
    <!-- 个人信息页面上部分 头像昵称部分 -->
    <div class="top-style">
      <div class="top-left-style">
        <img
          src="https://niit-student.oss-cn-beijing.aliyuncs.com/markdown/JESB[_4{9D]F9{`O5VFXB@N.png
"
          class="avatar-style"
        />
      </div>
      <div class="user-information-style">
        <div>
          <h1 class="nickname-style">{{user.userName}}</h1>
        </div>
        <div>
          <h1 class="music-style">音乐口味：华语流行、民谣</h1>
        </div>
        <div class="cc-df">
          <h3 class="nickname-style">关注：36</h3>
          <el-button
            class="btn"
            style="margin-top:10px;margin-left:10px;"
            @click="bathdele()"
            v-if="istrue"
          >批量删除</el-button>
          <el-button
            class="btn"
            style="margin-top:10px;margin-left:10px;"
            @click="bathdele()"
            v-if="!istrue"
          >确认删除</el-button>
        </div>
      </div>
    </div>
    <!-- 我收藏的音乐、创建的歌单、上传的视频部分 -->
    <div class="bottom-style">
      <!-- 切换 收藏、歌单、视频的菜单栏 -->
      <div class="menu-style">
        <div class="menu-chil-style">
          <p>我喜欢</p>
        </div>
        <div class="menu-chil-style">
          <p>创建的歌单</p>
        </div>
        <div class="menu-chil-style">
          <p>上传的视频</p>
        </div>
      </div>
      <!-- 切换到各个子菜单的内容区域 -->
      <div class="content-like" v-if="true">
        <div class="music-mune-style">
          <div class="menu-chil-style">
            <p>歌曲</p>
          </div>
          <div class="menu-chil-style">
            <p>歌手</p>
          </div>
          <div class="menu-chil-style">
            <p>歌曲类别</p>
          </div>
        </div>
        <!-- 喜欢歌的列表数据 -->
        <div class="music-mune-style" v-for="(item,index) in musics" :key="index">
          <div class="menu-chil-style side-style">
            <h2>
              <i class="iconfont" @click="dele(item.um)" v-if="istrue">&#xe611;</i>
            </h2>
            <md-checkbox v-model="array" :value="item.um" v-if="!istrue" style="margin-top:-1px; margin-right:-10px"></md-checkbox>
            <h1>{{item.name}}</h1>
          </div>
          <div class="menu-chil-style">
            <h1>{{item.author}}</h1>
          </div>
          <div class="menu-chil-style">
            <h1>{{item.type}}</h1>
          </div>
        </div>
      </div>
      <div class="content-create-music" v-if="false"></div>
      <div class="content-video" v-if="false"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      musics: [],
      istrue: true,
      array: []
    };
  },
  components: {},
  created() {
    this.$axios({
      method: "GET",
      url: this.GLOBAL.baseUrl + "/userMusic/" + this.user.id
    }).then(res => {
      this.musics = res.data.data;
      console.log(this.musics);
    });
  },
  mounted() {},
  methods: {
    flesh(){
 this.$axios({
      method: "GET",
      url: this.GLOBAL.baseUrl + "/userMusic/" + this.user.id
    }).then(res => {
      this.musics = res.data.data;
      console.log(this.musics);
    });
    },
    bathdele() {
      if (this.istrue) {
        this.istrue = !this.istrue;
      } else {
        this.istrue = !this.istrue;
        this.$axios({
          method: "GET",
          url:
            this.GLOBAL.baseUrl +
            "/userMusic/batchCancelLike/" +
            this.array +
            ","
        })
          .then(res => {
            console.log(res.data.msg);
            this.flesh()
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    dele(index) {
      this.$axios({
        method: "delete",
        url: this.GLOBAL.baseUrl + "/userMusic/cancelLike/"+index
      })
        .then(res => {
          console.log(res.data.msg);
          this.flesh();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 20px;
  left: 17%;
  width: 80%;
  right: 0px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.top-style {
  width: 100%;
  flex: 1 1 30%;
  display: flex;
}
.bottom-style {
  width: 100%;
  flex: 1 1 70%;
  // background-color: greenyellow;
}
// 头像样式
.avatar-style {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.top-left-style {
  margin-left: 2%;
}
.user-information-style {
  margin-left: 5%;
}
// 个人昵称、音乐风格、关注样式
.nickname-style {
  margin-top: 20px;
}
.music-style {
  margin-top: 20px;
  font-size: 20px;
}
.menu-style {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  display: flex;
}
.menu-chil-style {
  flex: 1 1 33%;
  display: flex;
}
.menu-chil-style p {
  font-size: 15px;
  line-height: 50px;
  margin-left: 8%;
}
.content-like {
  width: 100%;
  height: 400px;

  // background-color: blueviolet;
}
.music-mune-style {
  display: flex;
}
.menu-chil-style h1 {
  font-size: 15px;
  margin-left: 8%;
  margin-bottom: 10px;
}
.menu-chil-style h2 {
  font-size: 15px;
  margin-left: 8%;
  margin-right: -5%;
  margin-bottom: 10px;
}
</style>
