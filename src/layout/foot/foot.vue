<template>
  <div class="foot-container">
    <p class="line">
      本博客已萌萌哒运行{{loneTime}}(●'◡'●)ﾉ♥
      <br>@廖名博客 ———— android开发、前端开发、php开发...(⊙o⊙)…什么都学的程序员~
      <br>本站点采用 知识共享 署名-非商业性使用-禁止演绎 4.0 国际 许可协议
      <br>本站由Lqq AND Zqs 创建 - © 2018. 粤ICP备17139665号-1
    </p>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  data() {
    return {
      loneTime: ""
    };
  },
  created() {
    this.loneTime = this.$time.getNowTimes();
  },
  mounted() {
    setInterval(() => {
      this.$nextTick(() => {
        this.loneTime = this.$time.getNowTimes();
      });
    }, 1000);
  }
};
</script>

<style>
.line {
  margin-left: 19%;
  color: gray;
  font-size: 15px;
}
.foot-container {
  display: flex;
  align-items: center;
  height: 150px;
  background: black;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .foot-container {
    display: flex;
    align-items: center;
    height: 130px;
    background: black;
    width: 100%;
  }
  .line {
    padding: 12px;
    margin-left: 5%;
    color: gray;
    font-size: 0.6rem;
  }
}
</style>
