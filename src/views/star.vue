<template >
    <div>
        <v-star v-model="val1" label="第一行"></v-star>
    </div>
</template>
<script>
import vStar from '../components/v-star';
// import MessageBox from 'comb-ui/src/vendors/v-message-box';

export default {
    components:{vStar},
    data() {
        return {
            val1:0,
            val2:0,
            val3:0,
            imgList:[]
        }
    },
    mounted() {
        this.init();
    },
    beforeRouteLeave(to,form,next) {
        if(this.$router.direct(to,from) ===1) {
            next();
        } else {
            // MessageBox.confirm('您确认要退出评价么?退出后填写内容将会被清空','温馨提示').then(act =>{
            //     next();
            // }).catch(act =>{
            //     next(false);
            // });
        }
    },
    methods:{
        init() {
            setTimeout(()=>{
                this.val1 = 3;
                this.val5 = 1;
            },1000);
        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../scss/variables';
@import '../scss/mixins';
.page-star {
    .v-star,ul{
        padding:0 pxTorem(15);
    }
}
    
</style>