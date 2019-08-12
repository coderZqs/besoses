<template>
  <div class="sort-container">
    <div class="sort-content">
      <span class="sc-title">分类</span>
      <ul class="sort-ul">
        <li>
          <router-link class="linkclass" to="/sort/detail/1">
            游戏开发
            <span>{{books_num}}篇</span>
          </router-link>
        </li>
        <li>
          <router-link class="linkclass" to="/sort/detail/2">
            Vue开发
            <span>{{books_num}}篇</span>
          </router-link>
        </li>
        <li>
          <router-link class="linkclass" to="/sort/detail/3">
            android开发
            <span>{{books_num}}篇</span>
          </router-link>
        </li>
        <li>
          <router-link class="linkclass" to="/sort/detail/4">
            设计
            <span>{{books_num}}篇</span>
          </router-link>
        </li>
        <li>
          <router-link class="linkclass" to="/sort/detail/5">
            默认分类
            <span>{{books_num}}篇</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="tag-container">
      <span class="sc-title">标签</span>
      <ul class="tag-ul">
        <li class="hf" v-for="tag in tagList" :key="tag">
          <router-link class="linkDetail" to="sort/detail">{{tag}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books_num: 1,
      tagList: [
        "脚手架",
        "bfs搜索",
        "egret",
        "mac",
        "海报排版",
        "vue",
        "快应用",
        "进度条",
        "评分控件",
        "自定义view",
        "表情键盘",
        "logo",
        "sketch",
        "博客",
        "hexo"
      ]
    };
  },
  beforeCreate() {}
};
</script>

<style scoped>
.line {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
}
.linkclass {
}
.sc-title {
  text-align: center;
  font-size: 24px;
}
.sort-container {
  display: flex;
  height: 600px;
  font-size: 16px;
  margin: 50px auto;
  width: 60%;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}

.sort-container li {
  list-style: none;
  float: left;
}
.sort-content,
.tag-container {
  height: 130px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
.tag-container {
  margin-top: 80px;
  height: 130px;
}
.sort-ul li {
  height: 30px;
  margin: 15px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #f5f5f5;
  padding: 0 3px;
}
.sort-ul li span {
  font-size: 13px;
  margin-left: 3px;
  color: #ccc;
}
a {
  color: black;
  text-decoration: none;
}
.tag-ul {
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items: flex-end;
  height: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
}
.tag-ul li {
  min-width: 12%;
  text-align: center;
  margin: 8px;
}
.linkDetail {
  color: #ccc;
}
.sort-ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .sort-container {
    width: 100%;
    font-size:0.9rem;
  }
  .sort-ul li {
    margin: 2px;
  }
  .sort-ul {
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>
