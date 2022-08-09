<template>
  <div class="container">
    <div style="font-weight: bold;">{{ scTitle }}</div>

    <div class="sc-empty-block">
      <button class="sc-btn empty-btn" v-for="(item,index) in scEmptyBtns" :key="index" style="width:60px;">
        {{ item.text }}
      </button>
    </div>

    <div class="sc-empty-block">
      <button @click='handleClickWord(index)' class="sc-btn" v-for="(item,index) in words" :key="index"
              style="width:60px;margin: 10px;">{{ item }}
      </button>
    </div>

    <div class="sc-empty-block">
      <button @click="clean" type="primary" style="margin-top:30px;">清空</button>
    </div>
  </div>

</template>

<script>
import {message} from "ant-design-vue";

export default {
  name: "Qs",
  data() {
    return {
      scTitle: "锄禾日当午",
      answer: "汗滴禾下土",
      wordstr: '我汗你滴第禾和下土士',
      scEmptyBtns: [],
      words: ""
    }
  },
  mounted() {
    this.scEmptyBtns = this.initEmptyBtn()
    this.prepareWords()
  },
  methods: {
    prepareWords: function () {
      let words = this.wordstr.split("")
      words = words.sort(function () {
        return Math.random() - 0.5;
      });

      this.words = words
    },
    clean: function () {
      this.scEmptyBtns = this.initEmptyBtn()
    },
    initEmptyBtn: function () {
      let arr = []
      for (let i = 0; i < this.answer.length; i++) {
        arr.push({
          text: "", index: i
        })
      }
      return arr
    },
    //点击待选择的汉字
    handleClickWord(index) {
      let fullFlag = true
      let curWord = this.words[index];
      for (var i = 0; i < this.scEmptyBtns.length; i++) {
        if (this.scEmptyBtns[i].text === "") {
          this.scEmptyBtns[i].text = curWord
          if (i < 4) {
            fullFlag = false
          }
          break;
        }
      }

      if (fullFlag) {
        let answer = ""
        for (let item of this.scEmptyBtns) {
          answer += item.text
        }

        if (answer === this.answer) {
          message.success("回答正确")
        } else {
          message.error("回答错误")
        }
      }
    },

  }
}
</script>

<style scoped>
.container {
  width: 22%;
  margin: 21px auto;
}
.sc-empty-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.empty-btn {
  background-color: #FFF;
  border: 1px solid green;
}

.sc-btn {
  padding: 0px;
  text-align: center;
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin: 10px;
}
</style>
