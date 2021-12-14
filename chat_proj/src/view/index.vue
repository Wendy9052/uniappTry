<template>
  <div>
    主页
    <JwChat-index
        :taleList="list"
        @enter="bindEnter"
        v-model="inputMsg"
        :showRightBox='true'
        scrollType="noscroll"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      inputMsg: "",
    }
  },
  methods: {
    bindEnter() {

    }
  }
}
</script>

<style>

</style>