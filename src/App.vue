<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/calc">Calc</router-link>
        <div class="test">
            <router-view />
        </div>
    </div>
</template>

<script>
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import $ from 'jquery'
import Vue from 'vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="css">
.test {
    font-weight: bold;
}
</style>
