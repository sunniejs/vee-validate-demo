<template>
  <div class="form-box">
    <form class="sui-validate" method="" name="" @submit.prevent="submit">
      <div class="controls">
        <input name="name" type="text" v-model="name" placeholder="姓名">
      </div>
      <button type="submit">下一步</button>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        name: ''
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

  .sui-validate .controls .errortip {
    position: absolute;
    color: #ff0000;
  }

</style>
