<template>
  <div class="archive-container">
    <div class="block">
      <el-timeline>
        <el-timeline-item :timestamp="`目前共计 ${book_count} 篇文章~`" placement="top"></el-timeline-item>
        <el-timeline-item
          timestamp
          placement="top"
          v-for="info in booksList"
          :key="info.createDate"
          class="show_container"
        >
          <el-card class="el-card">
            <a href>{{info.instructions | limit }}</a>
            <div class="tagger">
              发表于
              <span>
                {{info.createDate|timeFilter(info.createDate)}}
                <i class="el-icon-folder"/>
                {{info.category}}
              </span>
              <i class="el-icon-camera-solid"/>
              {{info.seed}}次围观
            </div>
            <div class="title">
              <span class="divider">|</span>
              {{info.stetch | AddShu(info.stetch)}}
            </div>
            <div class="tag">
              <Arrow>
                <p slot="arrow">{{info.category}}</p>
              </Arrow>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import Arrow from "../layout/body/arrow";
import Divider from "../layout/header/divider";
export default {
  data() {
    return {
      booksList: [],
      book_count: 1
    };
  },
  components: {
    Arrow,
    Divider
  },
  methods: {
    addInfo() {
      const that = this;
      that.axios("148.70.80.173/mm/hello").then(res => {
        that.booksList = res.data.date;
        if(!res.data.date){
          this.$Message.error("服务器开小差，请联系服务器叫醒他 QvQ");
        }
      });
    }
  },
  filters: {
    limit: function(data) {
      if (data.length > 20) {
        return data.substr(0, 20) + "....";
      }
      return data;
    },
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
  created: function() {
    this.addInfo();
  }
};
</script>

<style scoped>
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
