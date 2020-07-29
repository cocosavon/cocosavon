<template>
    <div>
        <p>Hello, World!</p>
        <router-link to="/">Home</router-link>
        <router-link to="/calc">Calc</router-link>
        <div class="test">
            {{ msg }}
            <router-view />
        </div>
    </div>
</template>

<script>
import uuid from 'uuid'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="css">
.test {
    font-weight: bold;
}
</style>
