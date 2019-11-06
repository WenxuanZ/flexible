<template >
    <div class="page page-list">
        <ul class="desc">
            <li>
        <v-text value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，"></v-text>
           </li>
        </ul>
         <ul class="desc">
            <li>
                <v-text :limit.Number="1" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝思源21岁生日快乐；"></v-text>
            </li>
        </ul>
         <ul class="desc">
            <li>
                <v-text :limit.Number="1" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝思源21岁生日快乐；"></v-text>
            </li>
        </ul>
        <ul class="desc">
            <li>
                <v-text :limit.Number="3" :expandEnabled="true" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝思源21岁生日快乐；"></v-text>
            </li>
        </ul>
        <ul class="desc">
            <li>
                <v-text class="custom" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝思源21岁生日快乐；"></v-text>
            </li>
        </ul>
        <ul class="desc">
            <li>
                <v-text class="custom" value="    这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：
        亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝思源21岁生日快乐；
        ..."></v-text>
            </li>
        </ul>
    </div>
</template>
<script>
import vText from '../components/v-text'
export default {
    components:{
        vText
    }
}
</script>
<style lang="scss">
    
</style>