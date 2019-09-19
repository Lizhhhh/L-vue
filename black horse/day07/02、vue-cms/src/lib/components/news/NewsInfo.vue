<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }} </h3>
    <p class="subtitle">
      <span>发表时间: {{ newsinfo.add_tiem | dateFormat  }}</span>
      <span>点击 {{ newsinfo.click }}次</span>
    </p>

    <hr>

    <div
      class="content"
      v-html="newsinfo.content"
    ></div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'
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