<<template>
    <div>
      <h1>这是登录组件 --- {{ msg }}</h1>
    </div>
</template>

<script>
export default {
  data() {  // 注意:组件中的 data 必须是 function
    return {
      'msg': 123
    }
  },
  methods: {
    show() {
      console.log("调用了 login.vue 中的show 方法")
    }
  }
}
</script>