<template>
<div class="row">
    <v-row :gutter="30" :avg="true">
        <v-col :span="6"><p>111</p></v-col>
        <v-col :span="6"><p>111</p></v-col>
    </v-row>
    <v-row :gutter="30">
        <v-col :span="6"><p>111</p></v-col>
        <v-col :span="6"><p>111</p></v-col>
    </v-row>
</div>
</template>

<script>
import vRow from './../components/v-row';
import vCol from './../components/v-col';
export default {
    components: { vRow, vCol }
}
</script>
<style lang="scss">
    @import '../scss/_variables.scss';
    .row{
        padding: 0 ($grid-gutter-width / 2);
        .v-row {
            .v-col {
                line-height: pxTorem(28px);
                background: rgba(86,61,124,0.15);
                border: 1px solid rgba(86,61,124,0.2);
                > p {
                    height: 100%;
                    background: #f2f2f4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
</style>