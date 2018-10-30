<template>
    <el-container>
        <el-header height='6rem'>{{headerTitle}}</el-header>
        <el-main>
          <router-view></router-view>
        
        </el-main>
        <el-footer height='6rem'>
          <el-row style="height:100%">
            <el-col :span="8">
              
              <div class="grid-content bg-purple" @click="switchTab('/index/home')">
                <i class="el-icon-menu item-icon"></i>
                <div class="col-item">首页</div>
              </div>
             
            </el-col>
            <el-col :span="8">
          
              <div class="grid-content bg-purple" @click="switchTab('/index/order')">
                <i class="el-icon-document item-icon"></i>
                <div class="col-item">订单</div>
              </div>
              
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" @click="switchTab('/index/me')">
                <i class="el-icon-more-outline item-icon"></i>
                <div class="col-item">我的</div>
              </div>
            </el-col>
          </el-row>
        </el-footer>
    </el-container>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      headerTitle: '影片集中营',
      list: []
    }
  },
  created () {
    
  },
   methods: {
     switchTab (url) {
       console.log(url)
       this.$router.push(url)
     }
  }
 
}
</script>
<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 6rem;
    font-size: 2rem;
  }
  .moviePic{
    width: 10rem;
    height: 10rem;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
   
  }
  
  .el-container {
    
    height: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .grid-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    
  }
  .el-col{
    height: 100%;
  }
  .item-icon{
    font-size: 3rem;
  }
  .col-item{
   line-height: 1.5rem;
   font-size: 1.5rem;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

