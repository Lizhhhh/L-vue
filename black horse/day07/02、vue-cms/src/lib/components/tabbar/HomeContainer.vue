<template>
  <div>

    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568777580830&di=85da7f5e7ef49e1979638ff0f2267d10&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F23%2F20170123180043_ufFUw.thumb.700_0.jpeg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568777580830&di=817c84da0fa64405537dc1e6421ee5d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F10%2F20181110102045_jwqny.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568777580830&di=c4b9b8527b29ef4dea5c440c8591675c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F12%2F20150412H0815_aKd2h.jpeg">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 到 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class='mui-icon mui-icon-home'></span>
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span></span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
    <h3>
      首页
    </h3>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      lunbotuList: []
    }
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.lunbotuList = [
        { image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568777580830&di=85da7f5e7ef49e1979638ff0f2267d10&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F23%2F20170123180043_ufFUw.thumb.700_0.jpeg" },
        { image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568777580830&di=817c84da0fa64405537dc1e6421ee5d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F10%2F20181110102045_jwqny.jpg" },
        { image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568777580830&di=c4b9b8527b29ef4dea5c440c8591675c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F12%2F20150412H0815_aKd2h.jpeg" }
      ];
    }
  }
}

</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 400px;
}
.mint-swipe-item {
  &:nth-child(1) {
  }
  &:nth-child(2) {
  }
  &:nth-child(3) {
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;

  .mui-media-body {
    font-style: 13px;
  }
}
</style>