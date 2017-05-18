<template>
    <transition :name="transitionName" mode="out-in">
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
            },
            level(){
                return this.$store.state.level;
            }
        },
        watch: {
            '$route' (to, from){
                let transitionName = '',
                    level = this.$route.query.level;

                if ( to.path.split('/').length > from.path.split('/').length || level > this.level) {
                    transitionName = 'slide-left';
                } else {
                    transitionName = 'slide-right';
                }
                
                this.$store.commit('setTransition', {transitionName,level});
            }
        }
  	}
</script>
<style lang="scss">
    @import "./style/style.scss";
</style>

