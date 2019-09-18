<template>
  <div>

    <!-- 顶部 Header 区域 -->
    <div class="app-container">
      <mt-header
        fixed
        title="栗子1.0 -- Vue"
      ></mt-header>

      <!-- 中间路由 router-view 区域 -->
      <transition>
        <router-view></router-view>
      </transition>

      <!-- 底部 Tabber 区域 -->
      <nav class="mui-bar mui-bar-tab">
        <router-link
          class="mui-tab-item"
          to="/home"
        >
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link
          class="mui-tab-item"
          to="/member"
        >
          <span class="mui-icon mui-icon-contact">
          </span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link
          class="mui-tab-item"
          to="/shopcar"
        >
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link
          class="mui-tab-item"
          to="/search"
        >
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>