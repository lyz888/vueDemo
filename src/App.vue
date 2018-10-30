<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
img{
  display: block;
  width: 5rem;
  height: 5rem;
}
a{
  text-decoration: none;
  color: #333;
  font-size: 2rem;
}

</style>
