<template>
<div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
       <router-link to="/cell">cell</router-link>
    </div> -->
    <router-view />
</div>
</template>

<style lang="scss">
@import './scss/app.scss'; // 基础样式
@import '../node_modules/highlight.js/styles/zenburn.css'; // 代码高亮的样式，正式项目请移除: darcula、googlecode
@import './scss/_highlight.scss'; // 代码高亮的样式，正式项目请移除
  [v-cloak]{
        display: none;
    }
    /* 滑入滑出动画。 Author by Dio Zhu. on 2017.3.28 */
    .slide-left-enter-active, .slide-right-enter-active {
        transition: all .3s ease;
    }
    .slide-left-leave-active, .slide-right-leave-active {
        /*transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
        transition: all .1s ease;
    }
    .slide-left-enter, .slide-left-leave-active {
        transform: translateX(20px);
        opacity: 0.1;
    }
    .slide-right-enter, .slide-right-leave-active {
        transform: translateX(-20px);
        opacity: 0.1;
    }
    .v-modal{
        filter:alpha(Opacity=70)!important;
        opacity: 0.7!important;
    }

    .page {

        h2 {
            padding-top: pxTorem(15px);
            padding-left: pxTorem(15px);
            line-height: pxTorem(40px);
            // background: #f2f2f4;
        }

        .desc {
            /*height: pxTorem(28px);*/
            font-size: pxTorem(14px);
            line-height: 1.5;
            padding: 0 pxTorem(15px);
            color: #777E8C;
            /*background: #f2f2f4;*/

            /*display: table; // v-scroller会造成盒模型崩塌?*/
            table-layout: fixed; // 不加上这个如果内部标签有一大串url, 此父级会被撑开
            text-align: justify; // 两边对齐...
            word-break: break-all; // 强制换行, 避免超长url
            white-space: pre-wrap;
        }

        ul.desc {
            width: 100%;

            li {
                padding: pxTorem(5px);
                background: rgba(86,61,124,0.15);
                border: 1px solid rgba(86,61,124,0.2);
            }
        }

        // .attributes {
        //     /*padding: 0 pxTorem(6px);*/
        // }
    }

</style>
