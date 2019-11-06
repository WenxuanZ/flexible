<template>
    <div class="page page-form">
        <v-radio class="doing" 
            v-model="doingVal"
            :options="doingOpts"
            radioClasses="disk"
            mode="cards"
            @change="valueChange"
        ></v-radio>
        <p class="desc">当前选择: {{doingVal}}</p>
        <br>
    </div>
</template>
<script>
import vRadio from './../components/v-radio';
export default {
    data () {
        return {
            value1: '选项A',
            value2: '选项B',
            doingOpts:[
                {label:'中教培训课',value:1},
                {label:'外教培训课',value:2,sublabel:'aaa'},
                {label:'超级球队[已预约]',value:3,disabled:true}    
            ],
            doingVal:2
        }
    },
    components:{
        vRadio
    },
    methods: {
        go (name) {
            this.$router.push(name);
        },
        simpleAlert () {
            console.log('this is simple alert !');
        },
        selectDemo () {
            console.log('form.selectDemo: ');
        },
        handleChange (e) {
            console.log('form.handleChange',e);
        },
        valueChange(val){
            console.log('值变了为',val);
        }
    }
};
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
    @import "../scss/mixins";

    .page-form {

        .doing {
            padding: 0 pxTorem(22);
        }

        .v-radio.position .v-radio__r{
            height: pxTorem(64px);
            line-height: pxTorem(64px);
        }

        .v-radiolist.tag {
            margin: 0 pxTorem(15px) pxTorem(15px);
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
