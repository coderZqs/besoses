<template>
  <div class="detail">
    <p class="title">前端知识必备--防抖与节流</p>
    <el-divider></el-divider>
    <div class="content">
      <h3>内容简介</h3>防抖和节流是针对响应跟不上触发频率这类问题的两种解决方案。
      <br>在给DOM绑定事件时，有些事件我们是无法控制触发频率的。
      <br>如鼠标移动事件onmousemove, 滚动滚动条事件onscroll，窗口大小改变事件onresize，瞬间的操作都会导致这些事件会被高频触发。
      <br>如果事件的回调函数较为复杂，就会导致响应跟不上触发，出现页面卡顿，假死现象。 在实时检查输入时，如果我们绑定onkeyup事件发请求去服务端检查，用户输入过程中，事件的触发频率也会很高，会导致大量的请求发出，响应速度会大大跟不上触发。
      <br>针对此类快速连续触发和不可控的高频触发问题，debounce 和 throttling 给出了两种解决策略；
      <br>
      <h3>debounce</h3>去抖动。
      <br>策略是当事件被触发时，设定一个周期延迟执行动作，若期间又被触发，则重新设定周期，直到周期结束，执行动作。
      <br>这是debounce的基本思想，在后期又扩展了前缘debounce，即执行动作在前，然后设定周期，周期内有事件被触发，不执行动作，且周期重新设定。
    </div>
    <el-divider></el-divider>
    <h3>随机推荐</h3>
    <br>
    <router-link :to="'/home/detail/'+parseInt(Math.random(0,1)*10)">webpack4.x配置</router-link>
  </div>
</template>
<style scoped>
.detail {
  padding: 20px;
}
.title {
  font-size: 1.2rem;
  color: black;
  padding: 20px;
}
.content {
  letter-spacing: 2px;
  font-size: 0.9rem;
  line-height: 20px;
}
h3 {
  margin: 10px;
  display: inline-block;
  box-shadow: 0 2px 4px 0 #ccc;
  background: black;
  color: white;
}
</style>
