<template>
  <div class="home">
    <article>
      <div class="contaienr">
<BookCard />
      </div>
    </article>
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from "timers";
// @ is an alias to /src

import BookCard from "@/components/books-card";

export default {
  name: "home",
  data: () => ({
    num: 1
  }),
  components: {
    BookCard
  },
  methods: {
    _debounce(func, time, e) {
      let art = arguments;
      let _this = this;
      let t;
      return () => {
        clearTimeout(t);
        t = setTimeout(() => {
          func.apply(_this, [art]);
        }, time);
      };
    },
    throttle(time) {
      let t;
      return () => {
        if (!t) {
          setTimeout(() => {
            t = null;
            func();
          }, time);
        }
      };
    },
/*     _jugDirectory(e) {
      console.log(e);
      setTimeout(() => {
        console.log("111");
        moveEndX = e.changedTouches[0].pageX;
        moveEndY = e.changedTouches[0].pageY;
        X = moveEndX - startX;
        Y = moveEndY - startY;
        if (X > 0) {
          console.log("向右");
        } else if (X < 0) {
          console.log("向右");
        } else if (Y > 0) {
          console.log("向下");
        } else if (Y < 0) {
          console.log("向上");
        }
      }, 800);
    } */
  },
  mounted() {
/*     var _this = this;
    var t;
    window.addEventListener("touchmove", function(e) {
      console.log(e);
      let art = arguments;
      let _this = this;
      clearTimeout(t);
      t = setTimeout(() => {
        console.log(e);
      }, 500);
    }); */
    /* let t;
    var startX, startY, moveEndX, moveEndY, X, Y;

    const container = document.querySelector(".container");
    let pre = Date.now();
    var _this = this;
    window.addEventListener("touchstart", function(e) {
      console.log("111");
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
    });
    window.addEventListener("touchmove", function(e) {
      _this._jugDirectory(e);
    }); */
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

