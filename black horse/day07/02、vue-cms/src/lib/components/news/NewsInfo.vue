<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }} </h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间: {{ newsinfo.add_tiem | dateFormat  }}</span>
      <span>点击 {{ newsinfo.click }}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div
      class="content"
      v-html="newsinfo.content"
    >
    </div>

    <!-- 评论区域子组件 -->
    <comment-box></comment-box>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponents/Comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}    // 存储栗子对象
    }
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {  // 获取新闻详情
      this.$http.get('http://127.0.0.1:8888/getnew/' + this.id)
        .then((res) => {
          if (res.body.status === 0) {
            this.newsinfo = res.body.message;
            console.log(this.newsinfo);
          } else {
            Toast('获取栗子失败!');
          }
        })
    }
  },
  components: {  // 用来注册子组件的节点
    "comment-box": comment,
  }
}
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 5px;
  .title {
    font-size: 16px;
    color: red;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    color: #226aff;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>