<template>
    <transition :name="transitionName">
        <!--<keep-alive>-->
            <router-view class="view" :key="getKey()" />
        <!--</keep-alive>-->
    </transition>
</template>
<script>
    import { mapMutations } from "vuex";
  	export default {
        methods: {
            getKey(){
                return (new Date()).getTime()
            }
        },
        computed:{
            transitionName(){
                return this.$store.state.transitionName;
            }
        },
        watch: {
            '$route' (to, from){
                let transitionName = '',
                    toLen = to.path.split('/').length,
                    fromLen = from.path.split('/').length;

                if ( toLen > fromLen) {
                    transitionName = 'slide-left';
                } else if (toLen < fromLen){
                    transitionName = 'slide-right';
                } else {
                    transitionName = 'fade';
                }
                
                this.$store.commit('setTransition', {transitionName});
            }
        }
  	}
</script>
<style lang="scss">
    @import "./style/style.scss";
</style>

