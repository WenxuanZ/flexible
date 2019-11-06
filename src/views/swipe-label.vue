<template>
<div class="page page-swipe-label">
    <v-swipe-label :fixed="true" class="label-swipe">
        <div v-for="(item,index) in labs" :class="['itm',{cur:currentLab==item.id}]" @click="clickLabel(item)" :key="index">
            {{item.txt}}
        </div>
    </v-swipe-label>
</div>
</template>

<script>
import vSwipeLabel from './../components/v-swipe-label'
export default {
    name: 'page-swipe-label',
    components: {
        vSwipeLabel
    },
    data() {
        return {
            labs: [{
                    id: 0,
                    txt: '菜单一'
                },
                {
                    id: 1,
                    txt: '菜单二'
                },
                {
                    id: 2,
                    txt: '菜单三'
                },
                {
                    id: 3,
                    txt: '菜单四'
                },
                {
                    id: 4,
                    txt: '菜单五'
                },
                {
                    id: 5,
                    txt: '菜单六'
                }
            ],
            currentLab: 0
        }
    },
    mounted() {
        console.log('swipe label  mounted...');
    },
    methods: {
        onTransitionEnd(e) {
            console.log(`!!!![swipe-label].onTransitioEnd!`, e);
        },
        clickLabel(item) {
            console.log('click label:', item);
            this.currentLab = item.id;
        }
    }
}
</script>

<style lang="scss">
@import "../scss/_variables";
@import "../scss/_mixins";

.page-swipe-label {

    /*.v-swipe-label__container {*/
    /*border-bottom: red 2px solid;*/
    /*}*/

    /*.num {*/
    /*padding: pxTorem(5px) pxTorem(15px);*/

    /*p {*/
    /*padding-top: pxTorem(10px);*/
    /*font-size: pxTorem(15px);*/
    /*}*/
    /*}*/

    .label-swipe {
        height: pxTorem(38px);

        .v-swipe-label__container {
            height: pxTorem(38px);

            .v-swipe-label__content>div {
                transition: border-color 500ms;

                &.cur {
                    border-bottom: $brand-primary pxTorem(2px) solid;
                    //-webkit-animation: animat 500ms 1;
                    //-o-animation: animat 500ms 1;
                    //animation: animat 500ms 1;
                }
            }
        }
    }

    .feed-swipe {
        height: pxTorem(100px);

        .v-swipe-label__container {
            height: pxTorem(100px);
        }

        .v-feed {
            height: initial;
            border: #ff8f4f 1px solid;
            border-radius: pxTorem(6px);
            padding: pxTorem(10px);

            &.cur {
                border: $brand-primary 1px solid;
            }

            .v-feed__img {
                margin: 0;
            }

            .v-feed__con {
                margin-top: pxTorem(10px);
            }
        }
    }

    .blank {
        width: 100%;
        height: pxTorem(10px);
        background: orangered;
    }

}
</style>
