<template>
    
    <div class="v-row" :style="style" 
    :class="[
    justify !=='start'?'is-justify-'+justify:'',
    align !=='top'?'is-align-'+align:'',
    avg ?'avg':'',
    {'v-row__flex':type==='flex'}
    ]"
    >
    <slot></slot>
    </div>
</template>
<script>
export default {
    name:'v-row',
    props:{
        gutter:{
            type: Number,
            default:0
        },
        type:String,
        justify:{
            type:String,
            default:'start'
        },
        align:{
            type:String,
            default:'top'
        },
        avg:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            dpr:window.lib.flexible.dpr||1 ,
            ratio:37.5
        }
    },
    computed:{
        style() {
            var ret = {};
            if(this.gutter) {
                ret.marginLeft = `-${this.gutter/this.ratio/2}rem`;
                ret.marginRight = ret.marginLeft
            }
            return ret;
        }
    },
    mounted() {
        if(this.avg&& this.gutter) {
            [].forEach.call(this.$el.childNodes,(v,i)=>{
                if(i===0){
                    v.style.paddingLeft = `${this.gutter/this.ratio/2}rem`;
                } else if(i===this.$el.childNodes.length-1) {
                    v.style.paddingRight =  `${this.gutter/this.ratio/2}rem`;
                } else {

                }
            })
        }
    }

}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../scss/variables';
@import '../scss/mixins';
    .v-row{
        display: flex;
        flex-wrap:wrap;
        &.is-justify-space-between{
            justify-content: space-between;
        }
        &.is-justify-center{
            justify-content: center;
        }
        &.is-justify-start{
            justify-content: flex-start;
        }
        &.is-justify-end{
            justify-content: flex-end;
        }
        &.is-justify-space-around{
            justify-content: space-around;
        }
        >a{
            width:100%;
        }
    }
</style>
