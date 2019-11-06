<template>
    <transition :name="currentTransition" v-on:after-enter="afterEnter" v-on:enter="enter" v-on:enter-cancelled="enterCancelled">
        <div v-show="currentValue" class="v-popup" :class="[position&&modal?'v-popup-'+position:'v-popup-bubble']">
            <div v-if="toolbar" class="v-popup__toolbar">
                <slot name="toolbar">
                    <span class="v-popup__action v-popup__cancel" @click="currentValue = false">取消</span>
                    <span class="v-popup__action v-popup__confirm" @click="confirm"> 确定</span>
                </slot>
            </div>
            <slot ref="sloter"></slot>
        </div>
    </transition>
</template>
<script>
import Popup from '../js/utils/popup';
export default {
    name: 'v-popup',
    mixins:[Popup],
    props: {
        value:{
            type:Boolean,
            default:false
        },
        toolbar:{
            type:Boolean,
            default:false
        },
        closeEnable:{
            type:Boolean,
            default:true
        },
        modal:{
            default:true
        },
        modalFade:{
            default: true
        },
        lockScroll:{
            default:false
        },
        closeOnClickModal:{
            default:true
        },
        popupTransition:{
            type:String,
            default:'popup-fade'
        },
        position:{
            type:String,
            default:'bottom'
        }
    },
    data() {
        return {
            currentValue: false,
            currentTransition:this.popupTransition
        }
    },
    activated () {
        this.currentValue = false;
    },
    watch: {
        currentValue(val) {
            let touchObj = document.getElementsByClassName('page')[0];
            if(val&&touchObj) {
                touchObj.style.overflowX = 'hidden';
                touchObj.style.overflowY = 'hidden';
            } else if(touchObj) {
                touchObj.style.overflowX = 'auto';
                touchObj.style.overflowX = 'hidden';
            }
            this.$emit('input',val);
        },
        value (val) {
            this.currentValue = val;
        }
    },  
    beforeMount () {
        if(this.position !== 'bottom' &&this.modal) {
            this.currentTransition  = `popup-slide-${this.position}`;
        } else {
        }
    },
    mounted () {
        if (this.value) {
            this.rendered = true;
            this.currentValue = true;
            this.open();
        }
    },
    methods: {
        confirm () {
            if(this.closeEnable) {
                this.$emit('handleConfirm',this.currentValue);
                this.currentValue  = false
            } else {
                this.$emit('handleConfirm' ,false);
            }
        },
        touchHandler (e) {
            console.log('v-popup.methods.touchHandler:',e);
            e = e|| window.event;
            if(e && e.preventDefault) {
                e.preventDefault();
                e.stopPropagation();
            } else {
                e.returnvalue = false;
                return false;
            }
        },
        enter: function(el, done) {
            let maskor = this.$el.querySelectorAll('.picker-center-mask')[0];
            if(maskor && maskor.style) {
                maskor.style.top = 0;
            }
        },
        afterEnter(el) {

        },
        enterCancelled:function(el) {

        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../scss/variables';
    @import '../scss/mixins';
    .v-modal-enter{ animation:v-modal-in .2s ease; }
    .v-modal-leave{ animation:v-modal-out .2s ease forwards; }
    @keyframes v-modal-in { 0% { opacity:0 } }
    @keyframes v-modal-out {  to { opacity:0 } }
    .v-modal{
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:100%;
        opacity: 0.5;
        background:#000;
        transition: .5s;
        /*backface-visibility: hidden;*/
        /*transform: translate3d(0, 0, 0);*/
    }
    .v-popup-bubble{
        opacity: 1;
    }
    .v-popup{
        opacity: 0;
        width:100%;
        position: fixed;
        background:#fff;
        transition:opacity .2s ,transform .3s;
    }
    .v-popup-top {
        top:0;
        right:auto;
        bottom:auto;
        left:50%;
        transform: translate3d(-50%,0,0);
    }
    .v-popup-right{
        top:50%;
        right:0;
        bottom:auto;
        left:auto;
        transform:translate3d(100%,0,0);
    }
    .v-popup-middle{
        /*left: 50%;*/
        top: 50%;
        transform: translate(-50,-50%);
    }
    .v-popup-bottom {
/*
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        visibility: hidden;
*/
        bottom: 0;
        left: 0;
        transform: translateY(100%);
        opacity: .99;  // 解决ios渲染问题。 Mod by Keming Wen. on 2017.6.28
    }
    .v-popup-left {
        top: 50%;
        right: auto;
        bottom: auto;
        left: 0;
        transform: translate3d(0, -50%, 0);
    }
    .popup-slide-top-enter, .popup-slide-top-leave-active {  transform: translate3d(-50%, -100%, 0);  }
    .popup-slide-right-enter, .popup-slide-right-leave-active {  transform: translate3d(100%, 0, 0);  }
    .popup-slide-bottom-enter, .popup-slide-bottom-leave-active {  transform:  translate3d(0, 100%, 0);  }
    .popup-slide-left-enter, .popup-slide-left-leave-active {  transform:  translate3d(-100%, -50%, 0);  }
    .popup-fade-enter, .popup-fade-leave-active {  opacity: 0;  }
    .popup-fade-enter-to,
    .popup-slide-bottom-enter-to {
        visibility: visible;
    }
    .popup-slide-right-enter-to,.popup-slide-middle-enter-to{
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
    .popup-fade-enter-to { // 解决ios渲染问题。 Mod by Keming Wen. on 2017.6.28
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
    .popup-fade-leave-to { // 解决ios渲染问题。 Mod by Keming Wen. on 2017.6.28
        opacity: 0;
    }
    .v-popup__toolbar { // 操作栏
        height: pxTorem(40);
        border-bottom: #e3e3e3 1px solid;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .v-popup__action {
            margin: 0 pxTorem(15);
            font-size: pxTorem(15);
        }
    }
    
</style>