<template>
  <div>

    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in newsLists"
        :key="item.id"
      >
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          >
          <div class="mui-media-body">
            <h1> {{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{ item.add_time | dateFormat }}</span>
              <span>点击: {{ item.check }}次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      url: 'http://localhost:3000/message',
      newsLists: []
    }
  },
  methods: {
    getNewsList() {
      this.$http.get(this.url).then(res => {
        if (res.body.length > 0) {
          this.newsLists = res.body;
        } else {
          Toast('获取失败');
        }
      })
    }
  },
  created() {
    this.getNewsList();
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 20px;
      width: 100%;
    }

    .mui-ellipsis {
      font-size: 15px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>