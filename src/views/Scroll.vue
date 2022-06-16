<template>
  <div class="wrap">
    <div class="pou">
      <div class="blo"
           :class="{'active': active1 === index}"
           v-for="(item, index) in list" :key="index"
           @click="clickHandle(item.option, index)"
      ><span>{{ item.values }}</span></div>
    </div>
    <div>
      <div ref="select" style="height: 500px">
        <span style="color: #f0f;">精选内容：</span>
        Lorem ipsum dolor sit amet consectt!
      </div>
      <div ref="comduce" style="height: 800px">
        <span style="color: #f0f;">推荐内容：</span>
        Lorem ipsum dolor sit amet consectetur o?
      </div>
      <div ref="normal" style="height: 900px">
        <span style="color: #f0f;">普通内容：</span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elrum at.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {
      list: [],
      active1: 0
    }
  },
  mounted() {
    this.list = [
      {
        values: '精选',
        active: true,
        option: this.$refs.select.offsetTop
      },
      {
        values: '推荐',
        active: false,
        option: this.$refs.comduce.offsetTop
      },
      {
        values: '普通',
        active: false,
        option: this.$refs.normal.offsetTop
      }
    ],
      window.addEventListener('scroll', this.handleScroll, false)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    clickHandle(top, index) {
      this.active1 = index
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      const aa = document.documentElement.scrollTop
      setTimeout(() => {
        const arr = [...this.list].reverse()
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].option <= aa) {
            this.active1 = arr.length - 1 - i
            break
          }
        }
      }, 20)
      this.active1 = this.active
    }
  },
}
</script>

<style scoped>
.wrap {
  background: slateblue;
  padding: 0 20px;
}

.wrap .pou {
  position: fixed;
  bottom: 100px;
  right: 20px;
  text-align: center;
  z-index: 2;
  background: #dad8d8;
}

.wrap .pou .blo {
  padding: 9px;
}

.wrap .pou .blo:hover, .active {
  background: cornflowerblue;
  padding: 9px;
  color: #fff;
}
</style>
