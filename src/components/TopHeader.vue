<template>
    <div class="top-header">
        <a href="javascript:;" @click="back" class="back"><Icon icon="icon-back"/></a>
        <h1>{{title}}</h1>
    </div>
</template>
<script>
    import Icon from "./Icon";
    export default {
        props: ["title"],
        methods:{
            back(){
                this.$router.go(-1)
                this.$emit('back');
            }
        },
        components: {
            Icon
        }
    }
</script>
<style lang="scss" scoped>
    .top-header{
        position: relative;
        text-align: center;
        color:#fff;
        background:#0097FF;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.173333rem;
        font-size: .48rem;
    }
    h1{
        font-size: 1em;
        position: absolute;
        left: 50%;
        margin-left: -1.2rem;
        width: 2.4rem;
        font-weight: 700;
    }
    .back{
        color:#fff;
        width: 1.173333rem;
        height: 1.173333rem;
        display: flex;
        align-items: center;
        justify-content:center;
        font-size: 0.65rem;
        svg{
            display: block;
            width: .586667rem;
            height: .586667rem;
            fill: #fff;
        }
    }
</style>