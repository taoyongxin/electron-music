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
            <router-link to="/personal" style="color:#393d49;">个人信息</router-link>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <img
                class="picture"
                src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/音乐.png"
              />
              <router-link to="/index" style="color:#393d49;">音乐馆</router-link>
            </template>
          </el-submenu>
          <el-menu-item index="2">
            <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/视频.png" />
            <router-link to="/main" style="color:#393d49;">视频</router-link>
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
#content {
  background: #ffffff;
  width: 100%;
}
</style>
