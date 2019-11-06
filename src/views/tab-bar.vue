<template>
<div>
    <!-- <h2>示例</h2> -->

    <v-tab-bar v-bind:tabs='tabs' @change="changeFn">
        <!--<p slot="con" v-for="(item, index) in tabs.tabCons" :key="index" v-if='tabs.selectNum==index'>-->
        <!--{{item}}-->
        <!--</p>-->
        <!-- <p slot="customTpl" v-if='tabs.selectNum==0'>{{template}}</p>
        <p slot="customTpl" v-if='tabs.selectNum==1'>{{template1}}</p>
        <p slot="customTpl" v-if='tabs.selectNum==2'>{{template2}}</p>
        <p slot="customTpl" v-if='tabs.selectNum==0' ref='testTpl'></p> -->

    </v-tab-bar>
    <div class="selected-val"><span>{{selectNav}}</span>已选中:</div>
</div>
</template>

<script>
import vTabBar from './../components/v-tab-bar';
export default {
    components: {
        vTabBar
    },
    data() {
        return {
            tabs: {
                fixed: false,
                customTpl: false,
                selectNum: 0,
                tabCons: ['我初始化的000月度内容', '我初始化的111月度内容', '我初始化的222季度内容'], // 可改为ES6模板
                tabNavs: ['年度', '月度', '季度']
            },
            selected: '年度',
            template: ''
        };
    },
    mounted() {
        // console.log('tab-bar.mounted...');
        // this.template = `<h1>${this.selected}我是标签模板第一项.</h1>`;
        // this.template1 = `${this.selected}我是标签模板第二项.`;
        // this.template2 = `${this.selected}我是标签模板第三项.`;
        // this.$refs.testTpl.innerHTML = `<h1>${this.selected}我是标签模板第一项.</h1>`;
    },
    created() {

    },
    computed: {
        selectNav: function () {
            return this.selected.split('度')[0]
        }
    },
    methods: {
        changeFn: function (item, index) {
            this.selected = item;
            console.log(this.selected);
        },
        selectNav1: function () {
            return this.selected.split('度')[0];
        }
    }
}
</script>

<style lang="scss">
@import "../scss/variables";
@import "../scss/mixins";

.p-float-comments {
    display: none
}

.v-tabBar {
    width: 100%;
    line-height: pxTorem(30px);
    font-size: pxTorem(16px);
    background: #f2f2f4;

    p {
        font-size: pxTorem(16px)
    }
}

.selected-val {
    margin: pxTorem(10px) 0;
    line-height: pxTorem(30px);
    padding: pxTorem(10px);
    font-weight: bold;
    color: #007AFF;
    font-size: pxTorem(16px);
    background: #fff;

    span {
        float: right;
        font-size: pxTorem(16px);
    }
}
</style>
