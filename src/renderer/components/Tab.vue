<template >
  <div style="display:flex;" >
    <el-row class="tac" style="display:flexd;width:300px;">
      <el-col :span="12">
        <el-menu default-active="2">
          <el-menu-item>
            <img
              class="picture"
              src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/个人信息.png"
            />
            <router-link to="/personal">个人信息</router-link>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <img
                class="picture"
                src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/音乐.png"
              />
              <router-link to="/index">音乐馆</router-link>
            </template>
          </el-submenu>
          <el-menu-item index="2">
            <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/视频.png" />
            <router-link to="/main">视频</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/电台.png" />
            <span slot="title">电台</span>
          </el-menu-item>
          <el-menu-item index="4">
            <img
              class="picture"
              src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/我喜欢.png"
            />
            <span slot="title">我喜欢</span>
          </el-menu-item>
          <el-menu-item index="5">
            <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/本地.png" />
            <span slot="title">本地和下载</span>
          </el-menu-item>
          <el-menu-item index="6">
            <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/历史.png" />
            <span slot="title">播放历史</span>
          </el-menu-item>
          <el-menu-item index="7">
            <img
              class="picture"
              src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/试听列表.png"
            />
            <span slot="title">试听列表</span>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <span>创建的歌单</span>
            </template>
            <el-menu-item-group>
              <template slot="title">默认列表</template>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>收藏的歌曲</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div class="top">
     <input class="input" placeholder="请输入内容"/>
     <img class="picture1 jl" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/音乐 (3).png">
      <div class=" top-right">
        <img class="picture1" style="border-radius:50%" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/8ad59cc9e1fe18e61db6d3ccbc615d5.jpg">
        <p class="jl">测试名字</p>
        <img class="jl picture1" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/钻石.png">
        <img class="jl picture1" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/下  拉 (1).png">
        <img class="jl picture1" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/皮肤.png">
        <img class="jl picture1" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/查找 表单 列表.png">
    </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "Tab"
};
</script>
<style scoped lang="scss">
.top {
  position: absolut;
  margin-top: 2px;
  display: flex;
  padding: 3px 5px 0 10px;
  margin-left: -130px;
  width: 800px;
  height: 37px;
  background-color:#fff;

}
#content {
  background: #ffffff;
  width: 100%;
  

}
 .input {
  background-color: #e0e0e0;
  border: none;
  width: 120px;
  height: 27px;
  border-radius: 15px;
}
.picture1{
  width: 30px;
  height: 30px;
}
.jl{
  padding: 2px 5px 1px 5px;
}
jl2{
  padding: 5px;
}
.top-right{
  display: flex;
  margin-left: 360px;
  width: 255px;
  height: 30px;
  background-color: #ffffff;
}
</style>
