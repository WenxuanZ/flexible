<template>
  <div class="tab-container">
        <v-row class="tn-tabbar" :class="{'is-fixed': tabs.fixed}">
            <div class="tn-tab-item" v-for="(item,index) in tabs.tabNavs"  @click="tabChange(item,index)">
                <v-col class="tn-tab-item-tit" :class="{selected:tabs.selectNum==index}">
                    {{item}}
                </v-col>
            </div>
        </v-row>
        <div class="tn-tab-container-item" v-if ="!tabs.customTpl">
            <v-text :limit.Number = "1"  class="tn-cell" v-for="(item,index) in tabs.tabCons" :key="index" v-if='tabs.selectNum==index'>
                {{item}}
            </v-text>
      </div>
      <div v-if ="tabs.customTpl" class="tn-tab-container-item">
        <slot name="con">
          暂无内容
        </slot>
        <slot name="customTpl">
        </slot>
    </div>
    </div>
</template>

<script>
import vRow from './v-row.vue';
import vCol from './v-col.vue';
import vText from './v-text.vue';
export default {
    components: {
        vRow,
        vCol,
        vText
    },
    props: {
        tabs: {
            fixed: {
                type: Boolean,
                default: false
            },
            selectNum: Number,
            tabNavs: Array,
            tabCons: Array
        }
    },
    data() {
        return {

        };
    },
    mounted() {
        console.log('TabBar.mounted...', this.tabs);
    },
    methods: {
        tabChange(item, index) {
            this.tabs.selectNum = index;
            console.log(item,index);
            this.$emit('change', item);
        }
    }
}
</script>

<style lang="scss">
@import "../scss/variables";
@import "../scss/mixins";

.tab-container {
    position: relative;
    background: #f2f2f4;

    .is-fixed {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .tn-tabbar {
        background-color: #fff;
        display: flex;
        left: 0;
        text-align: center;
    }

    .tn-tabbar {
        .is-fixed {
            right: 0;
            bottom: 0;
            position: fixed;
            z-index: 1;
        }
    }

    .tn-tab-item {
        color: #777E8C;
        display: block;
        font-size: pxTorem(20px);
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-decoration: none;
        height: pxTorem(44px);
        line-height: pxTorem(44px);

        .selected {
            border-bottom: pxTorem(2px) solid #007AFF;
            color: #007AFF;
            display: inline-block;
            height: pxTorem(44px);
        }
    }

    .tn-tab-item-label {
        color: inherit;
        font-size: pxTorem(12px);
        line-height: 1;
    }

    .tn-tab-item-tit {
        color: #000;
        padding: 0px pxTorem(10px);
        display: inline-block;
        font-size: pxTorem(14px);
        height: pxTorem(44px);
    }

    .tn-tab-container-item {
        padding: pxTorem(10px);
        background: #fff;
        width: 100%;
        font-size: pxTorem(16px);
        margin: pxTorem(10px) 0;
        color: #666;
    }
}
</style>
