<template>
  <ul class="btn-content" @click="add">
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>
export default {
  methods: {
    add() {
      this.$emit("pershow");
    }
  }
};
</script>

<style scoped>
.btn-content {
  padding: 2px;
  height: 1.7rem;
  width: 1.3rem;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
.btn-content li {
  height: 10%;
  list-style: none;
  width: 100%;
  background: white;
}
</style>
