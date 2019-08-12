<template>
  <div class="home">
    <article>
      <div class="contaienr">
        <h1>{{num}}</h1>
      </div>
    </article>
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from "timers";
// @ is an alias to /src

// import BookCard from "@/components/books-card";

export default {
  name: "home",
  data: () => ({
    num: 1
  }),
  components: {},
  mounted() {
    let t;
    const container = document.querySelector(".container");
    let pre = Date.now();
    var _this = this;
    window.addEventListener("wheel", e => {
      var now = Date.now();
      if (now - pre >= 100) {
        _this.num = e.wheelDelta > 0 ? (_this.num += 1) : (_this.num -= 1);
        pre = now;
      }
    });
  }
};
</script>
<style scoped>
.tag {
  color: white;
}
article {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
}
.home {
  color: #222a0a;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100%;
}
.contaienr {
  width: 100%;
}
</style>

