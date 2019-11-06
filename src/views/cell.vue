<template>
  <div class="home">
    <v-cell title="文宣" label="aaaa" :to="{name: 'index', query: {tmp: 'xxx'}}"></v-cell>
    <ul class="listview listview-form">
      <li>
        <v-cell title="标题文字"></v-cell>
      </li>
      <li>
        <v-cell title="标题文字" label="子标题"></v-cell>
      </li>
      <li>
        <v-cell title="标题文字" is-link></v-cell>
      </li>
      <li>
        <v-cell title="标题文字" desc="带路由跳转" is-link :to="{name: 'cell-swipe', query: {tmp: 'xxx'}}"></v-cell>
      </li>
      <li>
        <v-cell title="标题文字" value="（左侧说明文字）" desc="右侧说明文字"></v-cell>
      </li>
      <li>
        <v-cell title="标题文字" icon="location" desc="带 icon"></v-cell>
      </li>
      <li>
        <v-cell title="标题文字" icon="location disk" reverse></v-cell>
      </li>
    </ul>
    <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="classOption">
      <ul class="item">
        <li v-for="item in listData">
          <span class="title" v-text="item.title"></span>
          <span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import vueSeamlessScroll from "vue-seamless-scroll";
import vCell from "@/components/v-cell.vue";
export default {
  name: "home",
  data() {
    return {
      listData: [
        {
          title: "无缝滚动第一行无缝滚动第一行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第二行无缝滚动第二行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第三行无缝滚动第三行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第四行无缝滚动第四行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第五行无缝滚动第五行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第六行无缝滚动第六行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第七行无缝滚动第七行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第八行无缝滚动第八行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        }
      ]
    };
  },
  components: {
    vCell,
    vueSeamlessScroll
  },
  computed: {
    classOption: {
        step: 1,
        openTouch: false,
        waitTime: 0,
        direction: 1,
        singleHeight: 30
    }
  }
};
</script>
<style lang="scss">
.seamless-warp {
  height: 229px;
  overflow: hidden;
}
</style>