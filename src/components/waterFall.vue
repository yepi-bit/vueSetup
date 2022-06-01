<template>
<!--  <div>-->
<!--    <span style="margin-right: 50px">{{GetColor}}</span>-->
<!--    <span STYLE="margin-right: 50px">{{GetSelect}}</span>-->
<!--    <span>{{GetVisible}}</span>-->
<!--  </div>-->

<!--   :style="{background:`${colorSwitch}`}"-->
  <div class="columns">
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?city" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?night" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?developer" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?building" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?water" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?coding" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?stars" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?forest" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?girls" alt="" />
    </figure>
    <figure :style="{boxShadow: `2px 5px 6px ${colorSwitch}`}">
      <img src="https://source.unsplash.com/random?working" alt="" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "waterFalls",
  props: {
    GetColor: {
      type: String,
      require: false, // 是否必传，这里如果为true，在父组件不传msg，页面会报错
      default: null
    },
    GetSelect: {
      type: String,
      require: false,
      default: null
    },
    GetVisible:{
      type: Boolean,
      require: false
    }
  },
  data() {
    return {
      bgColor:""
    }
  },
  computed: {
    colorSwitch() {
      if ((this.GetSelect === 'system' || this.GetSelect === 'rgb') && this.GetColor.length !== 0) {
        return  this.GetColor
      } else {
        return this.GetVisible === true ? this.onBg() : '' // 设置随机颜色
      }
    }
  },
  methods:{
    onBg() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      this.bgColor = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return this.bgColor;
    }
  }
}
</script>

<style scoped>
.columns {
  column-width: 140px;
  column-gap: 15px;
  width: 90%;
  max-width: 500px;
  margin: 20px auto 0 auto;
}
.columns figure {
  display: inline-block;
  /*box-shadow: 0 1px 2px #D252C7;*/
  column-break-inside: avoid;
  border-radius: 8px;
  /*border: 2px solid sandybrown;*/
}
.columns figure img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 8px;
}
</style>
