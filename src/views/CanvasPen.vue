<template>
  <div>
    <div class="container">
      <!--画布区域-->
      <div class="canvas_area">
        <canvas id="myCanvas" class="myCanvas"
                :style="{width:screenWidth, height:screenHeight}"
                disable-scroll="false"
                @touchStart="touchStart"
                @touchMove="touchMove"
                @touchEnd="touchEnd">
        </canvas>
      </div>

      <!--画布工具区域-->
      <div class="canvas_tools_block">
        <div class='img-block'>
          <img :src="demoImg"/>
          <el-button class='btn-linmo' @click='doCopy'>{{ copyName }}</el-button>
        </div>

        <div>
          <div class="canvas_tools">
            <div :class="curColor === '#000000'? 't-item-cur' : 't-item' " @click="colorSelect(0)"
                 style='background-color:#000000;'></div>
            <div :class="curColor === '#cc0033'? 't-item-cur' : 't-item'" @click="colorSelect(1)"
                 style='background-color:#cc0033;'></div>
            <div :class="curColor === '#ff9900'? 't-item-cur' : 't-item' " @click="colorSelect(2)"
                 style='background-color:#ff9900;'></div>
            <div :class="curColor === '#01aef0'? 't-item-cur' : 't-item' " @click="colorSelect(3)"
                 style='background-color:#01aef0;'></div>
            <div :class="curColor === '#05c605'? 't-item-cur' : 't-item' " @click="colorSelect(4)"
                 style='background-color:#05c605;'></div>
            <div :class="curColor === '#f9f605'? 't-item-cur' : 't-item' " @click="colorSelect(5)"
                 style='background-color:#f9f605;'></div>
          </div>
          <div class="canvas_tools">
            <div :class="curSize === 2? 't-item-cur' : 't-item' " @click="penSelect(0)">细</div>
            <div :class="curSize === 4? 't-item-cur' : 't-item' " @click="penSelect(1)">中</div>
            <div :class="curSize === 10? 't-item-cur' : 't-item' " @click="penSelect(2)">粗</div>
            <div class="t-item-sq" @click="doClear">清</div>
            <div class="t-item-sq" @click="saveCanvas">存</div>
            <el-button class="t-button-sq" hover-class='btn-hover' open-type='share'>↱</el-button>
          </div>
        </div>

      </div>

      <div class="canvas_tools">
        <div class="t-item" @click="erase" data-p="#FFFFFF">擦</div>
        <div class="t-item" @click="clearCanvas">清</div>
        <div class="t-item" @click="revoke">撤</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "canvasPen",
  data() {
    return {
      screenWidth: "",
      screenHeight: "",
      canvasWidth: "",
      canvasHeight: "",
      demoImg: "",
      demoIndex: 1,
      copyName: "临摹",
      curActions: [],
      drawActions: [],
      curColor: "",
      curSize: "",
      penConfig: {
        fontSize: 4,
        color: '#000000'
      },
      fullWidth: '',
      context: '',
      startX: '',
      startY: ""
    }
  },
  mounted() {
    this.curColor = this.penConfig.color;
    this.curSize = this.penConfig.fontSize;
    this.fullWidth = document.documentElement.clientWidth;
    console.log(this.fullWidth)
    let canvasWidth = (this.fullWidth.screenWidth - 8) * 2
    let canvasHeight = (this.fullWidth.screenHeight - 200) * 2
    // if (this.fullWidth.model.indexOf('iPad') > -1) {
    //   canvasHeight = canvasHeight - 120
    // }
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.screenWidth = canvasWidth / 2
    this.screenHeight = canvasHeight / 2


    this.context = document.getElementById('myCanvas');
    // this.context.getContext("2d").drawImage("../../images/bg.png", 0, 0, 100, 100, 0, 0, this.canvasWidth, this.canvasHeight);
  },
  methods: {
    touchStart(e) {
      this.startX = e.changedTouches[0].x;
      this.startY = e.changedTouches[0].y;
      this.context = document.getElementById('myCanvas');
      this.context.getContext("2d").fillStyle(this.penConfig.color);
      this.context.getContext("2d").lineWidth(this.penConfig.fontSize);
    },
    touchMove(e) {
      var tmpX = e.changedTouches[0].x;
      var tmpY = e.changedTouches[0].y;
      this.context.getContext("2d").moveTo(this.startX, this.startY);
      this.context.getContext("2d").lineTo(tmpX, tmpY);
      this.context.getContext("2d").stroke();
      this.startX = tmpX;
      this.startY = tmpY;
    },
    touchEnd(e) {

      if (this.curActions && this.curActions.length > 0) {
        this.drawActions.push(this.curActions);
        this.curActions = []; //清空此笔画action
      }
    },
    doCopy() {
      if (this.copyFlag === undefined) {
        this.copyName = '取消'
        this.copyFlag = true
        this.drawActions = []
        return;
      }
      if (this.copyFlag) {
        this.clearCanvas()
        this.copyName = '临摹'
      } else {
        this.copyName = '取消'
      }
      this.copyFlag = !this.copyFlag
    },
    colorSelect(e) {
      if (e === 0) {
        this.penConfig.color = '#000000'
      } else if (e === 1) {
        this.penConfig.color = '#cc0033'
      } else if (e === 2) {
        this.penConfig.color = '#ff9900'
      } else if (e === 3) {
        this.penConfig.color = '#01aef0'
      } else if (e === 4) {
        this.penConfig.color = '#05c605'
      } else {
        this.penConfig.color = '#f9f605'
      }

    },
    penSelect(e) {
      if (e === 0) {
        this.penConfig.fontSize = '2'
      } else if (e === 1) {
        this.penConfig.fontSize = '4'
      } else {
        this.penConfig.fontSize = '10'
      }
    },
    saveCanvas() {
      //去掉临摹图
      if (this.copyFlag) {
        this.clearCanvas();
      }
      this.context.fillText('祁大聪讲编程 小程序', this.data.screenWidth - 150, this.data.screenHeight - 6)
      this.context.draw(true, drawRes => {
        //画图
      });
    },
    doClear() {
      this.clearCanvas()
      this.drawActions = []
    },
    erase() {
      this.penConfig.fontSize = 5;
      this.penConfig.color = '#FFF';
    },
    clearCanvas() {
      let canvasWidth = this.canvasWidth
      let canvasHeight = this.canvasHeight
      let tmpPenData = this.penConfig;
      this.context.drawImage("../../images/bg.png", 0, 0, 100, 100, 0, 0, canvasWidth, canvasHeight);
      this.context.draw();
      //还原画笔设置
      this.penConfig = tmpPenData;
    },
    revoke() {
      this.clearCanvas();
      this.drawActions.pop(); //撤销1笔actions
    }
  }
}
</script>

<style scoped>

.myCanvas {
  border: 1px solid #666;
}

.canvas_tools_block {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.canvas_tools {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}

.t-item {
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border: 2px solid #CCC;
  margin: 6px;
  border-radius: 50%;
  font-size: 32px;
}

.t-item-cur {
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  margin: 6px;
  border-radius: 50%;
  font-size: 32px;
  border: 4px solid #666;
}


.t-item-sq {
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border: 2px solid #CCC;
  background-color: #eee;
  margin: 6px;
  border-radius: 10px;
  font-size: 32px;
  color: red;
}

.t-item-sq:hover {
  background-color: lightblue;
  color: whitesmoke;
}

.t-button-sq {
  width: 74px;
  height: 74px;
  line-height: 74px;
  text-align: center;
  background-color: #eee;
  margin: 6px;
  padding: 0px;
  font-size: 32px;
}

.t-button-sq::after {
  border: 2px solid #CCC;
}

.img-block {
  width: 150px;
}

.img-block image {
  margin-top: -10px;
  width: 150px;
  height: 150px;
}

.btn-linmo {
  width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -10px;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
}

</style>
