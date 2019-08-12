<template></template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.$message.success("敬请期待");
      next(from.fullPath);
    });
  }
};
</script>

<style>
</style>
