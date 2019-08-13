<template>
  <div class="nav-header">
    <div class="header-right">
      <Logo logo="廖名博客"/>
      <div>
        <right-btn @pershow="show"></right-btn>
      </div>
    </div>
    <transition name="showfade">
      <div v-if="isShow" class="nav-container">
        <ul @click="add" class="nav-ul">
          <li>
            <i class="el-icon-s-home"></i>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <i class="el-icon-s-custom"></i>
            <router-link to="/sort">分类/标签</router-link>
          </li>
          <li>
            <i class="el-icon-s-order"></i>
            <router-link to="/archive">归档</router-link>
          </li>
          <li>
            <i class="el-icon-user-solid"></i>
            <router-link to="/about">关于</router-link>
          </li>
          <li>
            <i class="el-icon-paperclip"></i>
            <router-link to="/linkmore">友链</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Logo from "./logo";
import rightBtn from "./rightnav-btn";
export default {
  components: {
    Logo,
    rightBtn
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    add(e) {
      if (e.target.nodeName.toLowerCase() === "a") {
        /*         this.isShow = false; */
      }
    }
  }
};
</script>

<style scoped>
.header-right {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header {
  width: 100%;
  padding: 20px 5px;
}
.nav-container {
  padding: 30px;
}
.nav-container li {
  display: flex;
  transition: all 0.2s linear;
  height: 40px;
  align-items: center;
  list-style: none;
  overflow: hidden;
}
.nav-container li a {
  display: block;
  width: 100%;
  color:white;
  margin-left: 0.5rem;
  font-size: 0.9rem;
}
.showfade-enter-active,
.showfade-leave-active {
  transition: all 0.6s ease-out;
}
.showfade-enter,
.showfade-leave-to {
  opacity: 0;
}
</style>
