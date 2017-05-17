<template>
    <transition name="slide-left">
        <!--<keep-alive>-->
            <router-view></router-view>
        <!--</keep-alive>-->
    </transition>
</template>
<script>
  	export default {
    	name: 'app'
  	}
</script>
<style lang="scss">
    @import "./style/style.scss";
</style>

