<template>
<div class="page page-form-checkbox">
    <h2>表单参考样例</h2>
    <v-checkbox v-model="value11" :options="options11" checkAll="全选" radioClasses="disk"></v-checkbox>
    <div>
        {{value5}}
        <v-checkbox v-model="value5" :options="options5" radioClasses="disk" :max="2"></v-checkbox>
    </div>
    <input type="checkbox" v-for="(val,key) in value" :key="key" :value="val" @change="change" class="show" v-model="checkvalue">
    {{checkvalue}}
</div>
</template>

<script>
import vCheckbox from './../components/v-checkbox';
export default {
    data() {
        return {
            value11: ['大专', '硕士', '其他'],
            value: ['1', '2', '3'],
            checkvalue : ['2'],
            value5: ['选项A', '选项B', '选项C']
        }
    },
    components: {
        vCheckbox
    },
    methods:{
        change(val){
            console.log(val);
            if(this.checkvalue.length>1){
                val.target.checked=false;
                this.checkvalue.pop();
            }
        }
    },
    created() {
        this.options5 = ['选项A', '选项B', '选项C'];
        this.options11 = ['中专', '大专', '本科', '硕士', '博士', '博士后', '其他'];
    }
}
</script>

<style lang="scss">
.show {
    width: 30px;
    height: 30px;
}
</style>
