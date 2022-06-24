<template>
  <div>
    <div v-if="!isFullscreen">
      <FullscreenOutlined @click="click" />
    </div>
    <div v-else>
      <FullscreenExitOutlined @click="click" />
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import {message} from "ant-design-vue";
import {FullscreenOutlined, FullscreenExitOutlined} from "@ant-design/icons-vue";

export default {
  name: "screenFull",
  components: {
    FullscreenOutlined,
    FullscreenExitOutlined
  },
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        message.info('you browser can not work!')
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped>
</style>
