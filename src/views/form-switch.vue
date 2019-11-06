<template>
    <div>
        <v-switch label="标题" v-model="checkboxValue1" @change="handleChange"></v-switch>{{checkboxValue1}}
    </div>
</template>
<script>
import vSwitch from '../components/v-switch.vue';
export default {
    data() {
        return {
            checkboxValue1:true,
            checkboxValue2:true
        }
    },
    created: function() {
        console.log('created');
    },
    mounted () {
        console.log('form mounted... ');
    },
    components:{
        vSwitch
    },
    methods:{
        handleChange (val) {
            console.log('form.handleChange: ', val);
        }
    }
    
}
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../scss/variables";
    @import "../scss/mixins";
    .page-switch {
        .blank {
            width:100%;
            height:pxTorem(100px);
        }
    }
    
</style>