<template>
  <div style="display:flex;">
      <el-row class="tac" style="width:450px;display:flexd;width:300px;">
        <el-col :span="12">
          <el-menu
            default-active="2"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/音乐.png">
                <span>音乐馆</span>
              </template>
            </el-submenu>
            <el-menu-item index="2">
              <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/视频.png">
              <span slot="title">视频</span>
            </el-menu-item>
            <el-menu-item index="3">
                 <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/电台.png">
              <span slot="title">电台</span>
            </el-menu-item>
            <el-menu-item index="4">
                <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/我喜欢.png">
              <span slot="title">我喜欢</span>
            </el-menu-item>
            <el-menu-item index="5">
                <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/本地.png">
              <span slot="title">本地和下载</span>
            </el-menu-item>
            <el-menu-item index="6">
                <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/历史.png">
              <span slot="title">播放历史</span>
            </el-menu-item>
            <el-menu-item index="7">
                <img class="picture" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/试听列表.png">
              <span slot="title">试听列表</span>
            </el-menu-item>
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
</style>
