<template>
  <div class="home">
    <!-- 轮播图 -->
    <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="(item, index) in slider" :key="index">
        <router-link :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img">
        </router-link>
      </cube-slide-item>
    </cube-slide>

    <!-- 商品列表 -->
    <good-list :data="goods"></good-list>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapGetters } from 'vuex';
import GoodList from '@/components/GoodsList.vue';

export default {
  name: 'home',
  components: {
    GoodList
  },
  created() {
    this.getGoods();
  },
  computed: {
    ...mapState({ silder: state => state.goods.slider }),
    ...mapGetters(['goods'])
  },
  methods: {
    ...mapActions(['getGoods'])
  }

}
</script>
