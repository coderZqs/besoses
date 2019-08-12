<template>
  <div>
    <div id="triangle-left"></div>
    <div id="left">
        <i class="el-icon-star-on"></i>
      <slot name="arrow"/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

#triangle-left {
  width: 0;
  height: 0;
  border-top: 0.8rem solid transparent;
  border-right: 0.8rem solid black;
  border-bottom: 0.8rem solid transparent;
  float: left;
}
#left {
  min-width: 1.5rem;
  max-width: 4.0rem;
  height: 1.6rem;
  background: black;
  margin-left: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 .3rem .3rem 0;
}
</style>
