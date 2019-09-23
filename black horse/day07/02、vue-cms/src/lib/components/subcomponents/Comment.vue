<template>
  <div class="comment-container">
    <hr>
    <h3 class="title">发表评论</h3>
    <textarea
      placeholder="请输入要BB的内容(最多吐槽120字)"
      maxlength="120"
      v-model="comment"
    ></textarea>

    <mt-button
      type="primary"
      size="large"
      @click="addComment"
    >发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-19 14:45:42
        </div>
        <div class="cmt-body">
          锄禾日当午 栗子1
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第2楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-19 15:18:22
        </div>
        <div class="cmt-body">
          锄禾日当午 栗子2
        </div>
      </div>
    </div>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第3楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-19 15:18:47
        </div>
        <div class="cmt-body">
          锄禾日当午 栗子3
        </div>
      </div>
    </div>

    <mt-button
      type="danger"
      size="large"
      plain
      @click="getMore"
    >加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
      commentList:[

      ]
    }
  },
  methods: {
    getComments() {
      this.$http('http://127.0.0.1:8888/getcomments/')
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    addComment() {
      // this.$http('http://127.0.0.1:8888/')
      console.log(this.comment);
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-container {
  h3 {
    font-size: 18px;
    text-align: center;
    color: black;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body {
        text-indent: 2em;
        line-height: 35px;
      }
    }
  }
}
</style>