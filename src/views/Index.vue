<template>
    <div class="page page-index">
        <div v-for="(item, index) in list" :key="index">
            <h2 v-if="item.meta && item.meta.group && item.meta.group != list[index - 1].meta.group">{{item.meta.group}}</h2>
                <v-cell
                    v-if="item.name != 'index' && item.name != '404'"
                    :title="((item.meta && item.meta.title) ? item.meta.title + '（' : '') + item.name + ((item.meta && item.meta.title) ? '）' : '')"
                    is-link
                    :to="{ name: item.name }"
                ></v-cell>
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src
    import routes from '../routes.js';
    import vCell from '../components/v-cell.vue';

    export default {
        components: { vCell },
        data () {
            return {
                list: routes,
            };
        },
        created () {
            console.log('page.index.created: ');
        },
        mounted () {
            console.log('page.index.mounted: ');
        },
        methods: {
            handleClick () {
                console.log("Home.handleClick: ");
                this.$toast("toast~");
            }
        }
    };
</script>