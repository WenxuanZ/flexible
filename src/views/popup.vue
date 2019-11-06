<template>
<div class="page-message-box">
    <!-- <div class="listview listview-form"> -->
        <li>
            <v-cell title="点击popup" value="注释浮动"   is-link @click.native="popupVisible = true"></v-cell>
        </li>
        <li>
            <v-cell title="点击popup2" value="注释浮动2"  is-link @click.native="popupVisible1 = true"></v-cell>
        </li>
        <li>
            <v-cell title="点击popup3" value="注释浮动3"  is-link @click.native="popupVisible2 = true"></v-cell>
        </li>
         <li>
            <v-cell title="点击popup4" value="注释浮动4"  is-link @click.native="popupVisible3 = true"></v-cell>
        </li>
        <div>
             <v-popup v-model="popupVisible" position="middle" class="v-popup-float">
                <h2>标题</h2>
                <p>注释文字注释文字注释文字注释文字注释文字注释文字</p>
            </v-popup>
            <v-popup v-model="popupVisible1" toolbar >
                <h2>标题</h2>
                <p>注释文字注释文字注释文字注释文字注释文字注释文字</p>
            </v-popup>
            <v-popup v-model="popupVisible2" position="right" class="v-popup-panel" >
                 <div>
                     <h2>标题</h2>
                     <h2>标题</h2>
                     <h2>标题</h2>
                     <h2>标题</h2>
                     <h2>标题</h2>
                     <h2>标题</h2>
                 </div>
                <!-- <v-button @clvick.native="popupVisible2 = false">关闭 popup</v-button> -->
            </v-popup>
            <v-popup v-model="popupVisible3"  class="v-popup-top-piece" :modal="false">
                <p>更新成功</p>
            </v-popup>
        </div>
    <!-- </div> -->
</div>
</template>
<script>
import vCell from '../components/v-cell';
import vPopup from '../components/v-popup';
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            popupVisible:false,
            buttomBottom:0,
            popupVisible1:false,
            popupVisible2:false,
            popupVisible3:false
        }
    },
    created() {

    },
    components:{vCell,vPopup},
    watch:{
        popupVisible3(val) {
            if(val) {
                setTimeout(()=>{
                    this.popupVisible3= false;
                },2000);
            }
        }
    },
    methods:{
        // onDateChange(picker,values) {
        //     if( values[0] >values[1]){
        //         picker.setSlotValue(1,values[0]);
        //     }
        //     this.dateValue = values[0];
        // },
        // confirm(){
        //     console.log('popup.comfirm: ');
        //     this.$toast(this.dateValue);
        //     this.popupVisible = false;
        // }
    }
}
</script>
<style lang="scss" rel="stylesheet/css">
    @import '../scss/_variables.scss';
    .page-message-box{
        .v-popup-top-piece {
            width: 100%;
            height: pxTorem(50px);
            text-align: center;
            background-color: rgba(0,0,0,.7);
            backface-visibility: hidden;

            p {
                line-height: pxTorem(50px);
                color: #fff;
            }
        }
        .v-popup-float {
            position: fixed;
            background: #fff;
            top: 50%;
            left: 50%;
            -webkit-transform: translate3d(-50%,-50%,0);
            transform: translate3d(-50%,-50%,0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transition: .2s ease-out;
            transition: .2s ease-out;
        }
        .v-popup-float {
            width: pxTorem(200px);
            // top: pxTorem(300px);
            padding: pxTorem(15px);
            border-radius: pxTorem(5px);

            &:before {
                display: inline-block;
                width: 0;
                height: 0;
                border: solid transparent;
                border-width: pxTorem(10px);
                border-bottom-color: #fff;
                content: "";
                position: absolute;
                top: pxTorem(-20px);
                right: pxTorem(20px);
            }
        }
    }
</style>