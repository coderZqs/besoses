<template>
  <div class="all-container">
    <h3>查看你想要的内容</h3>
    <div class="searchbar">
      <el-select @change="change" v-model="value" placeholder="请选择">
        <el-option v-for="item in booksList" :key="item.sort" :label="item.sort" :value="item.sort"></el-option>
        <el-option label="全部" value="全部"></el-option>
      </el-select>
    </div>

    <h3>全部文章</h3>
    <div class="archive-container">
      <div class="block">
        <el-timeline v-for="info in propsList" :key="info.sort">
          <el-timeline-item :timestamp="`目前共计 ${book_count} 篇文章~`" placement="top"></el-timeline-item>
          <el-timeline-item
            :timestamp="item.pubDate"
            placement="top"
            v-for="item in info.section"
            :key="item.title"
            class="show_container"
          >
            <el-card class="el-card">{{item.title}}</el-card>
          </el-timeline-item>
          <el-timeline-item :timestamp="`以上是${info.sort}模块的全部内容啦`" placement="top"></el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../layout/body/arrow";
import Divider from "../layout/header/divider";
export default {
  data() {
    return {
      value: "",
      count: 25,
      booksList: [
        {
          sort: "JS",
          count: 1,
          section: [
            {
              title: "前端知识必备--防抖与节流",
              pubDate: "2018/05/20",
              label: "防抖节流"
            },
            {
              title: "前端知识必备--瀑布流",
              pubDate: "2018/8/10",
              label: "瀑布流"
            }
          ]
        },
        {
          sort: "VUE",
          count: 10,
          section: [
            {
              title: "VUE知识整理--MVVM模式",
              pubDate: "2019/05/20"
            },
            {
              title: "VUE知识整理--vue-cli3奇幻之旅",
              pubDate: "2019/05/20"
            },
            {
              title: "VUE知识整理--前端路由",
              pubDate: "2019/05/20"
            }
          ]
        }
      ],
      book_count: 1
    };
  },
  components: {
    Arrow,
    Divider
  },
  methods: {
    change() {
      console.log(this.propsList);
    },
    addInfo() {
      const that = this;
      /*       that.axios("148.70.80.173/mm/hello").then(res => {
        that.booksList = res.data.date;
        if (!res.data.date) {
          this.$Message.error("服务器开小差，请联系服务器叫醒他 QvQ");
        }
      }); */
    }
  },
  computed: {
    propsList() {
      if (this.value === "全部" || !this.value) {
        return this.booksList;
      }
      return this.booksList.filter(item => {
        return item.sort === this.value;
      });
    }
  },
  filters: {
    limit: function(data) {
      if (data.length > 20) {
        return data.substr(0, 20) + "....";
      }
      return data;
    }
  },
  created: function() {
    this.addInfo();
  }
};
</script>

<style scoped>
.all-container > .searchbar {
  display: flex;
  justify-content: center;
}
h3 {
  margin: 10px;
  padding: 3px;
  display: inline-block;
  box-shadow: 0 2px 4px 0 #ccc;
  background: black;
  color: white;
}
.all-container > .searchbar > * {
  margin: 10px;
}
.archive-container {
  width: 60%;
  margin: 40px auto;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.1);
}
.tagger {
  font-size: 1.1rem;
}
.el-card div {
  margin: 1rem 0rem;
}
.tag {
  color: white;
}
a {
  text-decoration: black;
  color: black;
  font-size: 1.3rem;
}
.title {
  font-size: 1.3rem;
}
@media screen and (max-width: 768px) {
  .archive-container {
    width: 90%;
  }
  a {
    text-decoration: black;
    color: black;
    font-size: 0.9rem;
  }
  .tagger {
    font-size: 0.7rem;
  }
  .title {
    font-size: 0.9rem;
  }
}
</style>
