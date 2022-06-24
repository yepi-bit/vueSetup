<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" size="large">
      <el-form-item label="新邮箱" prop="email">
        <el-input v-model="form.email" auto-complete="on"/>
      </el-form-item>
    </el-form>
    <a-input v-model:value="inputValue" placeholder="请输入..."/>
    <a-button :loading="codeLoading" :disabled="isDisabled" size="large" @click="sendCode">{{ buttonName }}</a-button>
  </div>
</template>

<script>
import {message} from "ant-design-vue";

export default {
  name: "Timer",
  data() {
    // const validMail = (rule, value, callback) => {
    //   if (value === '' || value === null) {
    //     callback(new Error('新邮箱不能为空'))
    //   } else if (value !== '') {
    //     message.success('邮箱验证成功!')
    //   } else {
    //     callback(new Error('邮箱格式错误'))
    //   }
    // }
    return {
      buttonName: '获取验证码',
      isDisabled: false,
      codeLoading: false,
      inputValue: '',
      time: 60,
      form: {
        email: ''
      },
      rules: {
        email: [
          // {required: true, validator: validMail, trigger: 'blur'},
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱', trigger: 'blur,change' }
        ],
      }
    }
  },
  methods: {
    promiseClick() {
      let promises = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('要返回的数据')
          message.info('请求数据中')
        }, 500)
      })
      return promises
    },
    sendCode() {
      if (this.inputValue === '') {
        message.info('请输入信息！')
        return
      }
      if (this.form.email === '') {
        message.info('请输入邮箱！')
      } else {
        this.$refs.form.validate(valid => {
          if (valid) {
            message.success('正在进入中!')
            if (this.inputValue !== '' && this.form.email !== '') {
              this.codeLoading = true
              this.buttonName = '验证码发送中'
              const _this = this
              const objAction = this.promiseClick()
              objAction.then(res => {
                message.success('发送成功，验证码有效期3分钟')
                this.codeLoading = false
                this.isDisabled = true
                this.buttonName = this.time-- + '秒后重新发送'
                this.timer = window.setInterval(function () {
                  _this.buttonName = _this.time + '秒后重新发送'
                  --_this.time
                  if (_this.time < 0) {
                    _this.buttonName = '重新发送'
                    _this.time = 60
                    _this.isDisabled = false
                    window.clearInterval(_this.timer)
                  }
                }, 1000)
              }).catch(err => {
                this.codeLoading = false
                console.log(err.response.data.message)
              })
            }
          }
        })
      }
    },
  }
}
</script>

<style scoped>
div {
  margin: 21px;
}
</style>
