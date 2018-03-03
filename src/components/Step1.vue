<template>
  <div class="form-box">
    <p>自定义验证规则学习</span>
    <form class="sui-validate" method="" name="" @submit.prevent="submit">
      <div class="controls">
        <input name="mobile" type="text" v-model="name" placeholder="请输入电话" v-validate="'required|mobile'">
        <span v-show="errors.has('mobile')" class="help">{{ errors.first('mobile') }}</span>
      </div>
      <button class="button" type="submit" :disabled="disabledFlag">下一步</button>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'Step1',
    data() {
      return {
        name: ''
      }
    },
    computed: {
      disabledFlag() {
        //验证不通过button disabled
        return this.$validator.errors.has('mobile')
      }
    },
    methods: {
      submit() {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-box {
    width: 80%;
    margin: 0 auto;
  }

  form .controls {
    position: relative;
  }

  form .controls input {
    margin-bottom: 2.25vw;
    padding: 2.25vw;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    background: rgba(247, 247, 247, 0.3);
  }

  .controls.sui-input-prefix {
    position: relative;
  }

  .controls.sui-input-prefix .sui-phone-prefix {
    position: absolute;
    margin: 1.5vw;
    padding: 0.5vw 1.5vw;
    color: #cdcdcd;
    border-right: 1px solid #cdcdcd;
  }

  .controls.sui-input-prefix input {
    padding-left: 14vw;
  }

  .sui-validate .controls {
    position: relative;
  }



  .button {
    background: #ff6600;
    color: #ffffff;
    border-radius: 5px;
    width: 80px;
    height: 35px;
    border: 1px solid #ffffff;
  }

  .button:disabled {
    opacity: .6;
  }

  .help {
    color: #ff0000;
  }

</style>
