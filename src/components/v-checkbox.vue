<template>
    <dl class="v-checkbox"
        :class="[
            {list: !tagsMode},
            {tags: tagsMode},
            {'limit':max <= currentValue.length}
        ]"
        @change="$emit('change',currentValue)"
    >
    <dt v-if="label" :class="[labelClasses]">{{label}}</dt>
    <dd :class="[{'m-l':!label}]">
        <label 
            v-if="checkAll && this.options.length > 1"
            :for="'vCheckBox'+ _uid+'-1'"
            :class="['v-checkbox__checkall',
            {reverse:reverse},
            {checked:currentObj['-1']===true}]"
        >
        <input 
            type="checkbox" 
            :id="'vCheckBox'+ _uid +'-1'"
            class="v-checkbox__input" 
            v-model="checkAllValue" 
            value="-1"
        >
        <div class="v-checkbox__label">{{checkAll}}</div>
        <i class="v-checkbox__icon icon icon-check" :class="[radioClasses,{right:reverse}]"></i>
        </label>
        <label v-for="(option, idx) in options"
            :key=idx
            :class="[
                //{slot:$slot['slot'+idx]},
                {start: idx === 0 || (slotStart && idx == slotStart)},
                {checked: currentObj[idx] ===true},
                {reverse: reverse}
            ]"
            >
            <input 
                type="checkbox" 
                class="v-checkbox__input" 
                v-model="currentValue" 
                :disabled="option.disabled" 
                :value="option.value||option"
                @change="checklimit"
                >
            <div class="v-checkbox__label">
                <slot :name="'slot'+ idx"> {{option.label||option}}</slot>
                <slot :name="'link'+idx"></slot>
            </div>
            <i class="v-checkbox__icon icon icon-check" :class="[radioClasses,{right:reverse}]"></i>
            </label>
    </dd>

    </dl>
</template>
<script>
import _ from 'lodash';
export default {
    name:'v-checkbox',
    props:{
        id:String,
        label: String,
        labelClasses: String,
        radioClasses: String,
        reverse: {
            type:Boolean,
            default: false
        },
        tagsMode:{
            type: Boolean,
            default:false
        },
        options:{
            type:Array,
            required:true
        },
        max:Number,
        value:Array,
        checkAll:String,
        checkAllFunc: Function
    },
    data() {
        return {
            currentValue: this.value,
            checkAllValue:[],
            currentObj:{},
            slotStart: 0
        };
    },
    computed:{
        limit() {
            return this.max < this.currentValue.length;
        }
    },
    watch:{
        value (val) {
            console.log(`v-checkbox. ${this._uid}.watch ===>value:`,val);
            this.currentValue = val;
            if(this.checkAll) {
                if(typeof this.checkAllFunc === 'function'){
                    this.checkAllFunc(val).then(res => {
                        console.log(`v-checkbox.${this._uid}.watch ===> currentValue: checkAllFunc.callback!!`,res);
                        if(!res && this.checkAllValue.length >0 ){
                            this.checkAllValue = [];
                        } else if (res && this.checkAllValue.length < 1) {
                            this.checkAllValue = ['-1'];
                        }
                    })
                } else if(val.length !== this.options.length && this.checkAllValue.length > 0) {
                    this.checkAllValue =[];
                } else if(val.length === this.options.length && this.checkAllValue.length <1) {
                    this.checkAllValue=['-1'];
                }
            }
            this._initCurrentObj(val);
        },
        currentValue (val) {
            console.log(`v-checkbox.${this._uid}.watch ===> currentValue:`,val);
            if(this.limit) {
                val.pop();
                return ;
            }
            this.$emit('input',val);
        },
        checkAllValue (val){
            if(!this.checkAll) return ;
            if(typeof this.checkAllFunc === 'function'){
                if(val.length>0){
                    console.log('v-checkbox.watch.checkAllValue: slelectAll!');
                    let adds = [];
                    this.options.forEach((v)=>{
                        if(!_.find(this.currentValue,function(i){return i.nodeId === v.nodeId;})) adds.push(v.value||v);
                    })
                    if(adds.length>0) this.currentValue = this.currentValue.concat(adds);
                } else if(this.currentValue.length && this.currentValue.length>= this.options.length) {
                    console.log('v-checkbox.watch.checkAllValue: clearAll ');
                    let dels = [...this.currentValue];
                    this.options.forEach((v) => {
                        dels.forEach((m,n)=>{
                            if(parseInt(m.nodeId)===parseInt(v.nodeId)) dels.splice(n,1);
                        })
                    });
                    if(dels.length!==this.currentValue.length) this.$set(this,'currentValue',dels);
                }
            } else if(val.length>0){
                console.log('v-checkbox.watch.checkAllValue: select All!!!');
                let rtn = [];
                this.options.forEach((v)=>{
                    rtn.push(v.value||v);
                });
                this.$set(this,'currentValue',rtn);
            } else if (this.currentValue.length && this.currentValue.length === this.options.length){
                console.log('v-checkbox.watch.checkAllValue: clear All!!!');
                this.$set(this,'currentValue',[]);
            }
        }
    },
    created () {
        console.log(`v-checkbox.${this._uid}.created:`);
        this._initCurrentObj(this.value);
    },
    mounted () {
        console.log(`v-checkbox.${this._uid}.mounted: `);
    },
    methods:{
        _initCurrentObj (val) {
            this.options.forEach((va,ix)=>{
                this.currentObj[ix] = false;
                [].forEach.call(val,(v,i) => {
                    if(va === v || (va.value && va.value === v)) this.currentObj[ix] = true;
                })
            });
            console.log('v-checkbox._initCurrentObj:',this.checkAllValue);
            if(this.checkAllValue.length){
                this.currentObj['-1'] = true;
            } else {
                this.currentObj['-1'] = false;
            }
        },
        checklimit(el) {
            if(this.max && this.max <= this.currentValue.length&&el.target.checked ) {
                el.target.checked = false;
            }
        }
    }
}
</script>
<style rel="stylesheet/scss"  lang="scss">
    @import "./_variables.scss";
    @import "./_mixins.scss";
    $line-height: pxTorem(44px);
    $line-height-double: pxTorem(64px);
    $tit-color: #000;
    $tit-color-light: #737373;
    $placeholder-color: #007AFF;
    $color-grey: #d9d9d9;
    $color-white: #FFF;
    $color-blue: #4CD864;
    $icon-color: #007AFF;
    $icon-diabled-color: #f2f2f4;
    $icon-diabled-border-color: #ccc;
    .v-checkbox {
        position: relative;
        // height: 100%;
        // @include box_flex;
        // @include align_items(stretch);
        // @include justify-content(space-between);
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-direction: row;

        dt, dd {
            display: block;
        }
        dt {
            width: 24%;
            // font-size: pxTorem(15px);
            // padding-left: pxTorem(15px);
            // padding-top: pxTorem(15px);
            // @include flex_grow(0);
            // @include flex_shrink(0);
            // @include flex_basis(auto);
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: auto;
            display: flex;
            align-items: center;

            &.light {
                color: #737373;
            }
        }
        dd {
            width: 76%;
            // @include flex_grow(1);
            // @include flex_shrink(1);
            // @include flex_basis(auto);
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: auto;

            .icon {
                /*display: none;*/
                color: transparent;
                /*order: -1;*/

                &.right {
                    order: 9;
                }

                &.disk {
                    width: pxTorem(23px);
                    height: pxTorem(23px);
                    text-align: center;
                    font-size: pxTorem(14px);
                    line-height: pxTorem(23px);
                    color: #FFF;
                    background: transparent;
                    border: $icon-color pxTorem(1px) solid;
                    margin-top: pxTorem(-1px);
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                }
            }
        }
    &.list {

            label {
                /*height: $line-height;
                line-height: $line-height;
                font-size: pxTorem(15px);*/

                // @include box_flex;
                // @include align_items(center);
                // @include justify-content(flex-start);
                display: flex;
                align-items: center;
                justify-content: flex-start;

                &.reverse {
                    /*@include box_flex;
                    @include align_items(center);
                    @include justify-content(space-between);*/
                    .icon {
                        order: -1;
                    }
                }

                .v-checkbox__label {
                    min-height: $line-height;
                    line-height: $line-height;
                    font-size: pxTorem(15px);

                    // @include flex_grow(1);
                    // @include flex_shrink(1);
                    // @include flex_basis(auto);
                    flex-grow: 1;
                    flex-shrink: 1;
                    flex-basis: auto;

                    display: flex;
                    justify-content: space-between;
                }

                .v-checkbox__icon {
                    // @include flex_grow(0);
                    // @include flex_shrink(0);
                    // @include flex_basis(auto);
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: auto;
                }

                // .v-checkbox__input{
                //     @include flex_grow(1);
                //     @include flex_shrink(1);
                //     @include flex_basis(auto);
                // }
                .v-checkbox__input:checked ~ .v-checkbox__icon {
                    /*display: block;*/
                    color: $icon-color;

                    &.disk {
                        color: #FFF;
                        background: $icon-color;
                    }

                    &::after {
                        border-color: $color-white;
                        transform: rotate(45deg) scale(1);
                    }
                }
                // .v-checkbox__input:checked ~ .v-checkbox__label {
                //     color: $icon-color;
                // }
            }

        }
        &.tags {
            @include align_items(stretch);

            dd {
                margin-bottom: pxTorem(15px);
            }

            label {
                display: inline-block;
                /*font-size: pxTorem(14px);
                line-height: 1;
                padding: pxTorem(4px) pxTorem(13px);
                margin-top: pxTorem(15px);
                margin-right: pxTorem(10px);
                border: #DDDEE3 1px solid;
                border-radius: pxTorem(2px);*/

                .v-checkbox__label {
                    font-size: pxTorem(14px);
                    line-height: 1;
                    padding: pxTorem(4px) pxTorem(13px);
                    margin-top: pxTorem(15px);
                    margin-right: pxTorem(10px);
                    border: #DDDEE3 1px solid;
                    border-radius: pxTorem(2px);

                }
                .v-checkbox__input, .v-checkbox__icon {
                    display: none;
                }

                &.checked .v-checkbox__input:checked ~ .v-checkbox__label {
                    background: #3395FF;
                    border-color: #3395ff;
                    color: #FFF;
                }
                /*.v-checkbox__input:checked + {
                    background: #3395FF;
                    border-color: #3395ff;
                    color: #FFF;
                }*/
            }
        }

    }
     .v-checkbox { // max限制
        &.list {
            &.limit {
                .v-checkbox__input:checked ~ .v-checkbox__icon{
                    color: $icon-diabled-border-color!important;

                   &.disk {
                        color: transparent!important;
                        background: transparent!important;
                        border-color: $icon-diabled-border-color!important;
                    }
                }
                .v-checkbox__input:not(:checked) ~ .v-checkbox__icon {
                    /*.v-checkbox__icon:not(:checked) {*/
                    color: #FFF;
                    &.disk {
                        color: transparent!important;
                        background: transparent!important;
                        border-color: $icon-diabled-border-color!important;
                    }
                }
                .checked .v-checkbox__input:checked ~ .v-checkbox__icon{
                    color: $icon-diabled-border-color!important;
                    // color: #FFF;
                    &.disk {
                        color: $icon-diabled-border-color!important;
                        background: $icon-diabled-color!important;
                        border-color: $icon-diabled-border-color!important;
                    }
                }
            }
        }
        &.tags {
            &.limit {
                .v-checkbox__input:checked ~ .v-checkbox__label{
                    color: $icon-diabled-border-color;
                    // background: $icon-diabled-color!important;
                }
                .v-checkbox__input:not(:checked) ~ .v-checkbox__label {
                    /*.v-checkbox__icon:not(:checked) {*/
                    color: $icon-diabled-border-color!important;
                }
            }
        }
    }

    .v-checkbox__label {

    }

    .v-checkbox__input {
        display: none;
    }

    .v-checkbox__icon {
        /*display: none;*/
        margin-right: pxTorem(15px);
        font-size: pxTorem(23px);
        color: #007AFF;

        &.icon-check {
            font-size: pxTorem(14px);
        }
        &.show {
            display: block;
        }
    }



</style>