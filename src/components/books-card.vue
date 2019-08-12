<template>
  <div class="container">
    <div class="main-container" v-for="book in bookList" :key="book.img">
      <div class="img-container">
        <img class="book-img" :src="book.img" alt="相册">
      </div>
      <div class="tagger">
        发表于
        <span>
          {{book.createDate|timeFilter(bookList.createDate)}}
          <i class="el-icon-folder"/>
          {{book.category}}
        </span>
        <i class="el-icon-camera-solid"/>
        {{book.seed}}次围观
      </div>
      <div class="title">
        <span class="divider">|</span>
        {{book.stetch | AddShu(book.stetch)}}
      </div>
      <div class="tag">
        <Arrow>
          <p slot="arrow">esset</p>
        </Arrow>
      </div>
      <el-divider></el-divider>
      <p class="readMore">
        <a href="#">阅读全文 >></a>
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
      bookList: []
    };
  },
  methods: {
    add() {
      this.axios("148.70.80.173/mm/hello").then(res => {
        this.bookList = res.data.date;
        console.log(res)
        if(!res.data.date){
          this.$Message.error("加载失败，请联系管理员.")
        }
      });
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
.book-img {
  width: 100%;
  height: 100%;
}
.container {
  margin-top:-50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
}
.title {
  font-size: 1.5rem;
  color: gray;
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
.main-container > *:not(.img-container) {
  margin-top: 0.3rem;
}
.tagger {
  text-align: center;
}
.tag {
  color: white;
  margin: 1rem 0;
}
.divider {
  font-weight: bolder;
  margin: 0 0.5rem;
}
.readMore a {
  color: gray;
  text-decoration: none;
}
.readMore a:hover {
  color: black;
}
</style>
