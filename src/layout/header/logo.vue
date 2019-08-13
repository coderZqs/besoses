<template>
  <div class="logo">
    <div v-if="!small" class="divider"></div>
    <div class="content">{{logo}}</div>
    <div v-if="!small" class="divider"></div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String
    }
  },
  data() {
    return {
      small: false
    };
  },
  methods: {
    isSmall() {
      var that = this;
      var screenWidth = document.documentElement.clientWidth;
      that.$nextTick(() => {
        that.small = screenWidth < 768 ? true : false;
      });
    }
  },
  mounted() {
    var that = this;
    this.isSmall();

    window.onresize = () => {
      that.isSmall();
    };
  }
};
</script>

<style scoped>
.logo {
  display: flex;
  flex-flow: column;
  width: 150px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.logo:hover .divider {
  width: 0px;
  height: 0px;
}
.content {
  font-size: 24px;
  font-weight: bold;
  margin: 4px;
  color: white;
}
.divider {
  width: 50%;
  height: 2px;
  background: black;
  transition: all 0.3s linear;
}
@media screen and (max-width: 768px) {
  .content {
    font-size: 1.2rem;
  }
  .logo {
    width: 100px;
  }
}
</style>
