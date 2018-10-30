<template>
    <div>
          <ul class="content">
            <li v-for="(item, index) in list" @click="bindToDetail(item.id)">
              <el-card>
              <img class="moviePic" :src="item.images.small" alt="">
              <span>{{item.title}}</span>
              </el-card>
            </li>
          </ul>
    </div>
</template>
<script>
    export default {
        name: 'me',
        data () {
            return {
                msg: '',
                list: []

            }
        },
        created () {
          this.$axios.post('/movie/in_theaters')
          .then(res => {
              console.log(res)
              if(res.status == 200){
                this.headerTitle = res.data.title;
                this.list = res.data.subjects;
                this.$store.dispatch('updataMoveList', {data: res.data.subjects})
              }
          })
          .catch(res => {
            console.log(res)
          })
        },
        methods: {
            bindToDetail(id) {
            console.log(id)
            // let detailData = this.list[id];
            // this.$store.dispatch('updataDetail', {data: detailData})
            this.$router.push({name: 'detail', params: {id: id}})
            }
        }
    }
</script>
<style>

</style>

