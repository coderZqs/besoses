<template>
  <div class="container">
    <div class="main-container" v-for="book in bookList" :key="book.img">
      <!--       <div class="img-container">
        <img class="book-img" :src="book.img" alt="相册">
      </div>-->
      <p>{{book.title}}</p>
      <div class="tagger">
        <span>
          {{book.createDate|timeFilter(bookList.createDate)}}
          <span class="shu"></span>
          <i class="el-icon-folder"/>
          {{book.category}}
          <span class="shu"></span>
        </span>
        <i class="el-icon-camera-solid"/>
        {{book.seed}}
      </div>
      <div class="title">
        <span class="divider"></span>
        {{book.stetch | AddShu(book.stetch)}}
      </div>
      <el-divider></el-divider>
      <p class="readMore">
        <router-link to="/home/detail/1">阅读全文 >></router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Arrow from "@/layout/body/arrow.vue";
/* import {BooksModel} from "../util/getBookInfo"
let booksModel =new BooksModel() */
export default {
  data() {
    return {
      data: {},
      bookList: [
        {
          title: "JS必备知识--防抖节流",
          category: "javascript",
          createDate: "2018年3月25日",
          seed: 20,
          stetch:
            "想要学扎实js，必须将其必学内容学扎实。优化性能是每个web工程师必备的一项技能，我们选取其中的一种方法，那就是本文题目《防抖与节流》"
        }
      ]
    };
  },
  methods: {
    add() {
      /*       this.axios("148.70.80.173/mm/hello").then(res => {
        this.bookList = res.data.date;
        console.log(res)
        if(!res.data.date){
          this.$Message.error("加载失败，请联系管理员.")
        }
      }); */
    }
  },

  filters: {
    timeFilter(val) {
      if (!val) {
        return "xxxx年xx月xx日25日";
      }
      return val;
    },
    AddShu(val) {
      if (!val) {
        return "这是标题";
      }
      return val;
    }
  },
  components: {
    Arrow
  },
  created() {
    this.add();
  }
};
</script>

<style scoped>
.container {
  margin-top: -50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
}
.main-container {
  display: flex;
  width: 60%;
  justify-content: space-between;
  flex-flow: column;
  border: 0.1rem solid white;
  box-shadow: 0rem 0.4rem 0.8rem 0 #ccc;
  padding: 1.5rem;
  margin: 2rem;
}
.main-container > *:not(.img-container) {
  margin-top: 1rem;
}
.main-container > p:first-child {
  font-size: 1.2rem;
}
.book-img {
  width: 100%;
  height: 100%;
}
.shu {
  height: 24px;
  margin: 0 0.2rem;
  background: black;
}
.tagger {
  text-align: center;
  color: gray;
}
.title {
  font-size: 1.5rem;
  color: gray;
}
.tag {
  color: white;
  margin: 1rem 0;
}
.divider {
  border-left: 2px solid gray;
  font-size: 1rem;
  margin: 0 0.5rem;
}
.readMore a {
  color: gray;
  text-decoration: none;
}
.readMore a:hover {
  color: black;
}
@media screen and (max-width: 768px) {
  .main-container {
    width: 80%;
    box-shadow: 0rem -0.1rem 0.5rem 0 #ccc;
    margin: 0.5rem;
    margin-top: 0.5rem;
  }
  .title,
  .tagger,
  .readMore a {
    font-size: 0.8rem;
  }
}
</style>
