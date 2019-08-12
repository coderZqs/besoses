<template>
  <div class="about-container">
    <div class="ac-header">
      <h1>About Me!</h1>
      <h3>欢迎来到我的博客小屋~</h3>
    </div>
    <article>
      <div class="resume">
        <h1>简历</h1>
        <el-divider/>
        <span class="rm-content">
          <Tree/>简历：
          <span class="resume-link">
            <router-link to="resume">廖青泉个人简历</router-link>
          </span>
        </span>
      </div>
      <div class="about-me">
        <h2>关于我</h2>
        <el-divider/>
        <span class="am-content"></span>
        <div class="my-skill">
          <span class="ms-header">技术栈</span>
          <span class="am-content">
            <ul>
              <li>c/c++</li>
              <li>java</li>
              <li>android</li>
              <li>vue(本博客就是用vue写的)</li>
              <li>Thinkphp(本博客接口就是用php写的)</li>
              <li>js</li>
              <li>html/css</li>
            </ul>
          </span>
        </div>
        <div class="my-hobby">
          <h3>我的爱好</h3>
          <span class="am-content">
            <ul>
              <li>游泳</li>
              <li>骑行</li>
              <li>羽毛球</li>
              <li>旅行</li>
              <li>画画、设计(很久没画了)</li>
              <li>魔方</li>
              <li>各种动手制作小玩意</li>
              <li>制作美食</li>
            </ul>
          </span>
          <span class="call-me">
            <ul>
              <li>
                QQ:
                <span>2116894296</span>
              </li>
              <li>
                邮箱:
                <span>2116894296@qq.com</span>
              </li>
              <li>
                微信:
                <span>2116894296</span>
              </li>
              <li>github：暂时关闭</li>
            </ul>
          </span>
        </div>

        <!-- 关于博客 -->
        <div class="about-blogs">
          <h3>关于博客</h3>
          <el-divider/>
          <span class="am-content">相对于技术博客，我更喜欢当成是我的网络上的一个小屋，不仅仅记录着我的编程学习经验，还会记录我生活中一些有趣的东西~</span>
          <div class="my-skill">
            <h3>开发时间</h3>
            <span class="am-content">
              <ul>
                <li>至今：优化、添加新功能</li>
                <li>2018.8：完成第一版，并上线</li>
                <li>2018.7：开始开发</li>
              </ul>
            </span>
          </div>
          <div class="blog-style">
            <h3>博客风格</h3>
            <span class="bs-content">
              <ul>
                <li>hexo的next主题，结合自己的喜好及审美观调整</li>
              </ul>
            </span>
          </div>
          <div class="blog-skill">
            <h3>技术栈</h3>
            <span class="bs-content">
              <ul>
                <li>博客前端使用vue+element</li>
                <li>博客接口使用php(thinkphp框架…)</li>
              </ul>
            </span>
          </div>
          <div class="blog-feat">
            <h3>博客功能</h3>
            <span class="bf-content">
              <ul class="check-box">
                <li>
                  <i class="el-icon-document-checked"></i> 分类/标签列表
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>文章归档
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>'关于'页面
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>'我的简历'页面
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>友链
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>文章详情页
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>分类/标签 对应的文章列表
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>文章详情页标题目录导航
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>首页（文章列表）
                </li>
                <li>
                  <i class="el-icon-document-checked"></i>按文章标题和简介搜索
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </article>
    <el-divider/>
    <div class="post-reword">
      <p class="help">如果我的文章对您有帮助！有钱的捧个钱场，没钱的捧个人场，谢谢您！</p>
      <el-button type="danger">悬赏支持</el-button>
    </div>
    <div class="comment-form">
      <el-form ref="form" size="mini" :rules="rules" :model="form" label-width="80px">
        <el-form-item>
          <el-input v-model="form.name" placeholder="昵称(必填)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.email" placeholder="邮箱(选填)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="textarea" :rows="10" placeholder="写下您的建议或者意见" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item class="submit-btn">
          <el-button type="primary" @click.prevent="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="comment-container">
      <h4>{{commentList.length}}条留言</h4>
      <div class="content" v-for="comment in commentList" :key="comment.time">
        <a href="#">回复</a>
        <div class="comment-header">
          <div class="headimg"></div>
          <span class="h-and-time">
            <p>sebastian</p>
            <p>{{comment.time}}</p>
          </span>
        </div>
        <p>{{comment.txt}}</p>
        <div class="reply-comment" v-for="reply in comment.items" :key="reply.huifu">
          <a href="#">回复</a>
          <div class="comment-header">
            <div class="reply-heading"></div>
            <span class="h-and-time">
              <p>
                Lyq
                <span>(作者)</span>
              </p>
              <p>{{reply.time}}</p>
            </span>
          </div>
          <p>{{reply.txt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tree from "@/layout/body/tree";
export default {
  data() {
    return {
      commentList: [],
      form: {
        name: "",
        email: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            trigger: "blur",
            message: "请输入正确格式"
          }
        ],

        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      var _this = this;
      this.axios
        .post("148.70.80.173/hello/addpinglun", {
          from: 1,
          name: _this.form.name,
          txt: _this.form.desc
        })
        .then(() => {
          this.$message.success("发表成功");
        })
        .catch(() => {
          this.$message.error("发送失败，请联系管理员");
        });
    },
    getComment() {
      this.axios.get("148.70.80.173/mm/pinglun").then(res => {
        this.commentList = res.data.date.reverse();
      });
    },
    clickBtn() {
      console.log(this.$time);
    }
  },
  created() {
    this.getComment();
  },
  components: {
    Tree
  }
};
</script>
<style scoped>
.content {
  position: relative;
  transition: all 0.2s linear;
  padding: 1rem;
}
.content:hover {
  background: rgba(0, 0, 0, 0.1);
}

.h-and-time {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.comment-header {
  display: flex;
  width: 20rem;
}
.h-and-time > p > span {
  font-weight: bold;
}
.headimg {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: url("../../public/img/headimg/zhong.jpg");
  background-size: cover;
  background-position: 60% 50%;
}
.reply-heading {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: url("../../public/img/headimg/liao.jpg");
  background-size: cover;
  background-position: 60% 50%;
}
.h-and-time > p:first-child {
  font-size: 1rem;
}
.h-and-time > p:last-child {
  font-size: 0.7rem;
}
.h-and-time {
  margin-left: 0.5rem;
}
.content > a,
.reply-comment > a {
  position: absolute;
  right: 1rem;
  font-size: 0.8rem;
  color: gray;
}
.reply-comment {
  transition: all 0.2s linear;
  position: relative;
  display: flex;
  padding: 0.5rem;
  flex-flow: column;
  width: 90%;
  border-left: 0.2rem solid black;
  margin: 0 auto;
}
.reply-comment:hover {
  background: rgba(0, 0, 0, 0.1);
}
.content > p,
.reply-comment > p {
  font-size: 1rem;
  padding: 1rem;
  color: black;
}
.about-container {
  width: 60%;
  border: 1px solid #ccc;
  height: auto;
  margin: 58px auto;
  padding: 40px;
  color: black;
  font-size: 20px;
  display: flex;
  flex-flow: column;
  box-shadow: 0px 8px 4px 0px rgba(0, 0, 0, 0.1);
}
el-divider {
  width: 100px;
}
.ac-header {
  display: flex;
  flex-flow: column;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.post-reword {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column;
}
.rm-content {
  display: flex;
  margin-bottom: 30px;
}
ul {
  padding: 20rpx;
  padding-left: 30px;
  margin: 20px;
  font-size: 18px;
}
h3 {
  color: gray;
}
.el-button--danger {
  background: red;
  transition: all 0.1s linear;
}
.el-button--danger:hover {
  background: rgba(255, 0, 0, 0.7);
}
.comment-form {
  margin-top: 100px;
  margin-left: -40px;
}
.submit-btn {
  float: right;
}
.resume-link {
  color: cadetblue;
}
.resume-link a {
  font-size: 18px;
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  .about-container {
    width: 70%;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
  li {
    font-size: 0.7rem;
  }
  form {
    margin-left: -40px;
  }
  .comment-container p {
    font-size: 0.7rem;
  }
}
</style>


