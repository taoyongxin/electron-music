<template>
<h1>音乐</h1>
</template>

<script>
export default {
 name: 'Main',
  data() {
    return {
authoritys:[]
    }
  },
  components: {},
  created() {
    this.$axios({
			method: 'get',
      url: this.GLOBAL.baseUrl +'/user/1'//后端api

		}).then(res => {
			console.log(res.data.data);
			this.authoritys=res.data.data
		});
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">

</style>
