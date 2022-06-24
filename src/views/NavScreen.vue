<template>
  <div>
    <screen-full id="screenfull" class="right-menu-item hover-effect" />
  </div>
</template>

<script>
import screenFull from "../components/screenFull.vue";
export default {
  name: "NavScreen",
  components:{
    screenFull
  }
}
</script>

<style scoped>
div{
  padding: 36px;
}
.right-menu-item {
  display: inline-block;
  padding: 0 8px;
  height: 100%;
  font-size: 36px;
  color: #5a5e66;
  vertical-align: text-bottom;
}
.right-menu-item .hover-effect {
  cursor: pointer;
  transition: background .3s;
}
.right-menu-item .hover-effect:hover {
  background: rgba(0, 0, 0, .025)
}
</style>
