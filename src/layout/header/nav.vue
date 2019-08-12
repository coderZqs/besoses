<template>
  <div class="container">
    <ul class="listContainer">
      <li>
        <i class="el-icon-s-home">
          <router-link to="/">首页</router-link>
        </i>
      </li>
      <li>
        <i class="el-icon-s-custom">
          <router-link to="/sort">分类/标签</router-link>
        </i>
      </li>
      <li>
        <i class="el-icon-s-order">
          <router-link to="/archive">归档</router-link>
        </i>
      </li>
      <li>
        <i class="el-icon-user-solid">
          <router-link to="/about">关于</router-link>
        </i>
      </li>
      <li>
        <i class="el-icon-paperclip">
          <router-link to="/linkmore">友链</router-link>
        </i>
      </li>
      <li>
        <i class="el-icon-menu">
          <router-link to="/more">更多</router-link>
        </i>
      </li>
      <li>
        <i class="el-icon-search">搜索</i>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
a {
  color: gray;
}
.listContainer li {
  float: left;
  padding: 0.2rem 0.3rem;
  border-radius: 0.5rem;
  transition: all 0.5s linear;
  list-style: none;
  margin-left: 30px;
}
.listContainer li:hover {
  background: black;
}
.listContainer li:hover a {
  color: white;
}
</style>


