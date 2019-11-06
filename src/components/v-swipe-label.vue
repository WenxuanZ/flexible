<template>
<div :class="['v-swipe-label',{dark}]">
    <div ref="container" class="v-swipe-label__container" @touchmove.stop @touchend.stop>
        <div ref="content" class="v-swipe-label__content" :style="{left: left + 'px'}">
            <slot></slot>
        </div>
        <p v-if="showBottomLine" class="line"></p>
    </div>
</div>
</template>

<script>
import {
    clearTimeout
} from 'timers';
export default {
    name: 'v-swipe-label',
    props: {
        id: String,
        fixed: {
            type: Boolean,
            default: false
        },
        showBottomLine: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            position: 0,
            isSticky: false,
            isFixed: false,
            floatClass: '',
            startX: 0,
            lastX: 0,
            lastMoveTime: 0,
            lastMoveStart: 0,
            stopMovingTag: false,
            minl: 0,
            maxl: -8000,
            conStyle: {
                left: '0px'
            },
            left: 0
        }
    },
    computed: {
        oh() {
            return this.$el.getBoundingClientRect().top;
        }
    },
    watch: {
        '$route.name'(val) {
            if (!this.fixed) return;
            if (!this._inactive) {
                console.log('v-swipe-label.watch.in...');
                window.addEventListener('scroll', this.scrollHandle);
            } else {
                console.log('v-swipe-label.watch.back...');
                window.removeEventListener('scroll', this.scrollHandle);
            }
        }
    },
    created() {
        console.log('v-swipe-label created...');
    },
    mounted() {
        this.$nextTick(() => {
            this.init();
        });
    },
    methods: {
        init() {
            console.log(this.$refs.content.offsetWidth,this.$refs.container.offsetWidth);
            this.maxl = -(this.$refs.content.offsetWidth - this.$refs.container.offsetWidth)
            if (this.fixed) {
                let scrollTarget = this.getScrollEventTarget(this.$el);
                scrollTarget.addEventListener('scroll', this.throttle(this.scrollHandle, 10));
                this.position = this.$el.getBoundingClientRect().top;
            }
        },
        throttle(fn, delay) {
            let now, lastExec, timer, context, args;
            let execute = function () {
                fn.apply(context, args);
                lastExec = now;
            };
            return function () {
                context = this;
                args = arguments;
                now = Date.now();
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                if (lastExec) {
                    let diff = delay - (now - lastExec);
                    if (diff < 0) {
                        execute();
                    } else {
                        timer = setTimeout(() => {
                            execute();
                        }, diff);
                    }
                } else {
                    execute();
                }
            };
        },
        getScrollEventTarget(element) {
            var currentNode = element;
            while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
                var overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
                if (overflowY === 'scroll' || overflowY === 'auto') {
                    return currentNode;
                }
                currentNode = currentNode.parentNode;
            }
            return window;
        }
    }

}
</script>

<style lang="scss">
@import "./_variables";
@import "./_mixins";

.v-swipe-label {
    position: relative;
    width: 100%;
    /*min-height: pxTorem(38px);*/
    // z-index: 98!important;

    // &.sticky {
    //     position: -webkit-sticky;
    //     position: sticky;
    //     top: 0;
    //     left: 0;
    // }

    .line {
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: pxTorem(0);
        // border-bottom: #3A3E39 1px solid;
        box-shadow: 0 1px 1px #3A3E39;
    }

}

.v-swipe-label__container {
    position: relative;
    width: 100%;
    /*min-height: pxTorem(38px);*/
    // overflow-y: hidden;
    // overflow-x: auto;
    /*overflow-x: hidden;*/
    // z-index: 99!important;

    // &.fixed {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    // }
}

.v-swipe-label__content {
    /*position: absolute;*/
    overflow-x: auto;
    /*overflow-x: hidden;*/
    /*overflow-y: hidden;*/
    white-space: nowrap;

    /*transform: translate3d(0, 0, 0);*/
    ::-webkit-scrollbar {
        height: 0;
    }

    >div {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        font-size: pxTorem(14px);
        line-height: pxTorem(38px);
        padding: 0 pxTorem(10px);
        margin: 0 pxTorem(10px);

        ::-webkit-scrollbar {
            height: 0;
        }

        // border-color: #fff;

        // @keyframes animat { 0%{ @include opacity(.5); } 10% { @include opacity(1)} }

    }
}

.dark {
    background: #1B1B20;

    .v-swipe-label__content {
        display: flex;

        .itm {
            flex: 1;
        }
    }
}
</style>
