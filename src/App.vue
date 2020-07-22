<template>
    <div>
        <p>Hello, World!</p>
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
