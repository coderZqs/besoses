<template>
  <div class="All-container">
    <header>
      <m-header v-if="small" key="show"></m-header>
      <b-header v-else key="bye"></b-header>
    </header>
    <article>
      <transition name="fade">
        <router-view/>
      </transition>
    </article>

    <Footer class="footer"/>
  </div>
</template>
<script>
import Footer from "@/layout/foot/foot.vue";
import Logo from "@/layout/header/logo";
import Nav from "@/layout/header/nav";
import mHeader from "@/layout/header/m-header";
import bHeader from "@/layout/header/header";
export default {
  data() {
    return {
      small: false
    };
  },
  components: {
    Logo,
    Nav,
    Footer,
    mHeader,
    bHeader
  },
  methods: {
    getScreenSize() {
      var Screensize = document.body.screenWidth;
    },
    getVisibility() {},
    visibilityChange() {
      switch (document.visibilityState) {
        case "hidden":
          document.title = "躲猫猫~";
          break;
        case "visible":
          document.title = "被发现啦~";
          break;
      }
    },
    smallorbig() {
      var _that = this;
      var screenSize = document.documentElement.clientWidth;
      if (screenSize < 1000) {
        window.innerWidth = 1000;
        _that.$nextTick(() => {
          _that.small = true;
        });
      } else {
        _that.$nextTick(() => {
          _that.small = false;
          console.log(_that.small);
        });
      }
    }
  },
  mounted() {
    var _that = this;
    _that.smallorbig();
    document.title = `被发现啦~`;
    document.addEventListener("visibilitychange", this.visibilityChange, false); // doucment.visibilitychange 监听窗口是否离开事件；
    window.onresize = function() {
      _that.smallorbig();
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Times New Roman", Times, serif;
}

header {
  width: 100%;
  min-height: 7rem;
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-around;
}
.All-container {
  height: 100%;
  width: 100%;
}
.footer {
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s linear;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
.router-link-exact-active {
  background: white;
  color: black !important;
  border-right: 5px solid blue;
}
@media screen and (max-width: 768px) {
  header {
    min-height: 3rem;
  }
}
</style>
