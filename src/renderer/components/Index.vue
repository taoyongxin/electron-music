<template>
  <div>
    <h1>主页</h1>
    <button @click="text()">跳转</button>
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
      }
  },
  computed: {}
}
</script>

<style scoped lang="scss">

</style>
