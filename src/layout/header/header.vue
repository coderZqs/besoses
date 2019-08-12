<template>
  <div class="header-content">
    <Logo logo="廖名博客"/>
    <Nav/>
  </div>
</template>

<script>
import Logo from "./logo";
import Nav from "./nav";
export default {
  components: {
    Logo,
    Nav
  }
};
</script>

<style scoped>
.header-content {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
</style>
