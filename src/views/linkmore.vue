<template>
  <div class="link-container">
    <div class="content" v-for="item in toolUseList" :key="item.sort_name">
      <span class="header">
        <Tree/>
        <p>{{item.sort_name}}</p>
      </span>
      <div class="tool-container">
        <span v-for="tool in item.tool_info" :key="item.tool_info[tool]">
          <a class="link-content" :href="tool.web_url">{{tool.tool_name}}</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Tree from "../layout/body/tree";
export default {
  data() {
    return {
      toolUseList: [
        {
          sort_name: "打包工具",
          tool_info: [
            {
              web_url: "https://www.webpackjs.com",
              tool_name: "webpack打包工具"
            },
            {
              web_url: "https://www.gruntjs.net",
              tool_name: "grunt打包工具"
            }
          ]
        },
        {
          sort_name: "后端开发",
          tool_info: [
            {
              web_url: "http://www.verypure.me/",
              tool_name: "纯洁下雪"
            }
          ]
        },
        {
          sort_name: "web开发",
          tool_info: [
            {
              web_url: "https://www.runoob.com/",
              tool_name: "菜鸟教程"
            },
            {
              web_url: "http://www.w3school.com.cn/",
              tool_name: "w3school教程"
            }
          ]
        },
        {
          sort_name: "UI设计",
          tool_info: [
            {
              web_url: "https://www.ui.cn/",
              tool_name: "中国UI设计平台"
            }
          ]
        },
        {
          sort_name: "项目搜索",
          tool_info: [
            {
              web_url: "https://github.com/",
              tool_name: "github"
            },
            {
              web_url: "https://gitee.com/",
              tool_name: "码云(中国github)"
            }
          ]
        },
        {
          sort_name: "Android",
          tool_info: [
            {
              web_url: "https://hencoder.com/",
              tool_name: "HenCoder"
            },
            {
              web_url: "https://www.wanandroid.com/",
              tool_name: "wanAndroid"
            },
            {
              web_url: "http://www.gcssloop.com/",
              tool_name: "gcssloop"
            }
          ]
        }
      ]
    };
  },
  components: {
    Tree
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
p {
  font-weight: bold;
  color: rgb(2, 1, 1);
}
.link-container {
  display: flex;
  width: 60%;
  margin: 8rem auto;
  flex-flow: column;
}
.tool-container {
  max-width: 40%;
  display: flex;
}
.tool-container span {
  margin: 1rem 0.7rem;
}
.link-content {
  text-align: center;
  width: 100%;
  display: inline-block;
  padding: 0.3rem;
  border-radius: 0.3rem;
  color: white;
  background: black;
}
.content {
  margin-top: 1rem;
}
@media screen and (max-width: 768px) {
  .tool-container {
    max-width: 100%;
    display: flex;
  }
  .link-container {
    display: flex;
    width: 90%;
    margin: 0rem auto;
    flex-flow: column;
    font-size: 0.8rem;
  }
  .content {
    margin-top: 0.5rem;
  }
}
</style>
