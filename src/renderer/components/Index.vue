<template>
  <div class="container">
    <h1>主页</h1>
  </div>
</template>

<script>
export default {
 name: 'Index',
  data() {
    return {
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      text(){
          this.$router.push("/login")
      },
      main(){
        this.$router.push("/tab")
      }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.container{
  margin: 0 auto;
  margin-left: -7%;
  width: 770px;
  height: 400px;
  background-color: red;
}
</style>
