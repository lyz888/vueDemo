<template>
<el-container>
  <el-header height='6rem'>
      <i class="el-icon-back" @click="bindBack"></i>
      {{info.title ? info.title : '详情页'}}
  </el-header>
  <el-main>
      <img :src="info.images.small" :alt="info.alt" title='这是一张图片'>
  </el-main>
</el-container>
</template>
<script>
    export default {
        name: 'detail',
        data () {
            return{
                info: {},

            }
        },
        created () {
            //let data = this.$store.detailData;
            let id = this.$route.params.id;
            let data = this.$store.getters.getDetailData(id);
            console.log('详情页',data)
            this.info = data;
        },
        computed: {
            detailObj() {
        
            }
        },
        methods: {
            bindBack() {
                this.$router.go(-1)
            }
        }

    }
</script>
<style>
.el-header{
    position: relative;
}
.el-icon-back{
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%); 
    font-size: 5rem;
    font-weight: bolder;
}
</style>

