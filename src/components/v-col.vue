<script type="text/babel">
export default {
    name:'v-col',
    props:{
        span:{
            type:Number,
            default:12
        },
        gutter:{
            type:Number,
            default:-1
        }
    },
    data () {
        return {

        };
    },
    computed:{
        parentGutter () {
            return this.$parent.gutter;
        },
        dpr() {
            return this.$parent.dpr;
        },
        ratio() {
            return this.$parent.ratio;
        },
        avg() {
            return this.$parent.avg;
        },
        style() {
            let ret ={},
            gutter;
            if(this.gutter === 0 ) {
                gutter = 0;
            } else if(this.gutter === -1) {
                gutter = this.parentGutter;
            } else {
                gutter = this.gutter;
            }
            if(gutter) {
                ret.paddingLeft = gutter / this.ratio /(this.avg?4:2)+'rem';
                ret.paddingRight = ret.paddingLeft;
            }
            return ret;
        }
    },
    render (h) {
        let {style} = this;
        let classList = [];
        console.log(this);
        ['span','offset','pull','push'].forEach(prop => {
            if(this[prop]) {
                console.log(this[prop],prop);
                classList.push(
                    prop!=='span'
                    ?`v-col-${prop}-${this[prop]}`
                    :`v-col-${this[prop]}`
                );
                console.log(classList);
            }
        });
        return (
            <div 
                class={['v-col',classList]}
                style={style}
                >
                {this.$slots.default}
            </div>
        );
    }

};
</script>
<style lang="scss" rel="stylesheet/scss">
@import "./_variables.scss";
@import './_mixins.scss';
 // 暂时仅使用flex布局，float方式暂不考虑
    %grid-column {
        position: relative;
        min-height: 1px; // Prevent columns from collapsing when empty
        /*padding-left: ($grid-gutter-width / 2);
        padding-right: ($grid-gutter-width / 2);*/
        box-sizing: border-box;
    }

    // @each $breakpoint in map-keys($grid-breakpoints) {
        @for $i from 1 through $grid-columns {
            .v-col-#{$i} {
                @extend %grid-column;
                flex-shrink: 0;
                flex-grow: 0;
                flex-basis: percentage($i / $grid-columns);
            }
        }
    // }
    
</style>