<script setup lang="ts">
console.log(import.meta.env);
</script>

<template>
  <div  class="bg-red-800">
    <ul>
      <li>首页</li>
      <li>商品</li>
      <li>会员</li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.mainT ul>li{
  display: inline-block;
  margin: 0 10px;

}
</style>
