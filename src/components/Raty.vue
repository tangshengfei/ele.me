<template>
    <div class="raty">
        <div class="raty-view">
            <Icon icon="icon-raty"/>
            <Icon icon="icon-raty"/>
            <Icon icon="icon-raty"/>
            <Icon icon="icon-raty"/>
            <Icon icon="icon-raty"/>
        </div>
        <div class="raty-wrap" :style="{width:count*20+'%'}">
            <div class="raty-wrap-inner">
                <Icon icon="icon-raty"/>
                <Icon icon="icon-raty"/>
                <Icon icon="icon-raty"/>
                <Icon icon="icon-raty"/>
                <Icon icon="icon-raty"/>
            </div>
        </div>
    </div>
</template>
<script>
    import Icon from "./Icon";
    export default {
        props: ['count'],
        components: {
            Icon
        }
    }
</script>
<style lang="scss">
    @import "../style/common.scss";
    .raty{
        width: rem(110);
        position: relative;
        font-size: 0;
        svg{
            margin:0 rem(1);
            width: rem(20);
            height: rem(20);
        }
    }
    .raty-view{
        width: 100%;
        height: 100%;
        svg{
            fill: #ddd;
        }
    }
    .raty-wrap-inner{
        width: rem(110);
        position: absolute;
        left: 0;
        top: 0;
    }
    .raty-wrap{
        z-index: 2;
        position: absolute;
        overflow: hidden;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        svg{
            fill: #ffaa0c;
        }
    }
</style>
