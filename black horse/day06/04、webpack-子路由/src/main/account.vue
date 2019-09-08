<template>
  <div>
    <h1>这是 Account 组件
      <router-link to="/account/login">login</router-link>
      <router-link to="/account/register">register</router-link>
      <router-view></router-view>
    </h1>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
body {
  div {
    font-style:italic
  }
}
</style>