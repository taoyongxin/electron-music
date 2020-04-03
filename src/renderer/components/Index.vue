<template>
  <div class="container">
    <h1>音乐馆</h1>
    <br />
    <div class="top">
      <p class="wz">精选</p>
      <p class="wz">排行</p>
      <p class="wz">歌手</p>
      <p class="wz">分类歌曲</p>
      <p class="wz">数字专辑</p>
      <p class="wz">有声节目</p>
    </div>
    <br />
    <div class="Carousel">
      <transition-group tag="ul" class="slide-ul" name="slide">
        <li
          v-for="(item,index) in sliders"
          :key="index"
          v-show="index===currentIndex"
          @mouseenter="stop"
          @mouseleave="go"
        >
          <a :href="item.url">
            <img class="picture" :src="item.image" alt="item.description" />
          </a>
        </li>
      </transition-group>
      <div class="carousel-items">
        <span
          v-for="(item,index) in sliders"
          :key="index"
          :class="{active:index===currentIndex}"
          @mouseover="change(index)"
        ></span>
      </div>
    </div>
    <br />
    <h1>官方歌单</h1>
    <br />
    <div class="guanf">
      <div class="music">
        <img
          class="img"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/20200403160756.png"
        />
        <p>今日私享</p>
      </div>
      <div class="music">
        <img
          class="img"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/20200403161101.png"
        />
        <p>每个周五听点新的</p>
      </div>
      <div class="music">
        <img
          class="img"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/20200403161251.png"
        />
        <p>失恋解药</p>
      </div>
    </div><br>
    <div class="gequ">

    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
        logisActive: true,
				albumisActive: false,
				logistrue: true,
				albumistrue: false,
      users: "",
      currentIndex: 0,
      timer: null,
      sliders: [
        {
          url: "#",
          description: "one",
          image:"https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/20200403155112.png"
        },
        {
          url: "#",
          description: "two",
          image:"https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/20200403162436.png"
        },
        {
          url: "#",
          description: "three",
          image:"https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/20200403162513.png"
        }
      ]
    };
  },
  components: {},
  created: function() {
    this.users = JSON.parse(localStorage.getItem("user"));
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 3000);
    });
  },
  mounted() {},
  methods: {
    text() {
      this.$router.push("/login");
    },
    main() {
      this.$router.push("/tab");
    },
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 2500);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
    },
    autoPlay() {
				this.currentIndex++
				if (this.currentIndex > this.sliders.length - 1) {
					this.currentIndex = 0
				}
			}
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 50px;
  left: 17%;
  width: 80%;
  right: 0px;
  min-height: 500px;
  background-color: #fff;
}
.top {
  display: flex;
  width: 100%;
  height: 30px;
  background-color: #fff;
}
.wz {
  padding: 2px 45px 0 0;
}
.guanf {
  display: flex;
  width: 100%;
  height: 150px;
  background-color: #fff;
}
.music {
  margin: 0 10% 0 0;
  width: 25%;
  height: 150px;
  background-color: #fff;
}
.img {
  width: 100%;
  height: 88%;
}
.Carousel {
  margin-left: 2%;
  width: 96%;
  height: 200px;
  background-color: #ffffff;
}
.picture {
  width: 80%;
  height: 180px;
}
.slide-ul {
  width: 100%;
  height: 100%;
}
.gequ{
  width: 100%;
  height: 200px;
  background-color: red;
}
</style>
