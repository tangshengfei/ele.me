<template>
    <div class="top-header">
        <a href="javascript:;" @click="back" class="back icon">&#xe708;</a>
        <h1>{{title}}</h1>
    </div>
</template>
<script>
    export default {
        props: ["title"],
        methods:{
            back(){
                this.$router.go(-1)
                this.$emit('back');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .top-header{
        position: relative;
        text-align: center;
        color:#fff;
        background:#0097FF;
        height: 88px;
        display: flex;
        align-items: center;
    }
    h1{
        font-size: 36px;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        width: 100px;
        height: 88px;
        font-weight: 700;
        line-height: 88px;
    }
    .back{
        color:#fff;
        padding-left: 23px;
        font-size: 44px;
        font-weight: 600;
    }
</style>