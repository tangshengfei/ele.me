<template>
    <div class="entry" :class="[list.length == 4?'list':'list1']">
        <a v-for="info in list" :href="info.url" class="child">
            <img class="img-icon" :src="info.src">
            <p class="entry-title" :style="{color:info.color}">{{info.title}}</p>
            <p class="entry-tips">{{info.tips}}</p>
        </a>
    </div>
</template>
<script>
    export default {
        props: ["list"]
    }
</script>
<style lang="scss" scoped>
    .entry{
        background: #fff;
        display: flex;
        flex-wrap: wrap;
    }
    .entry-title{
        line-height: 1.2;
        font-size: .48rem;
        margin-bottom: .16rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .entry-tips{
        line-height: 1.2;
        font-size: .32rem;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .child{
        box-sizing: border-box;
        padding: .64rem .4rem;
        height: 2.306667rem;
        display: block;
        border-bottom: 1px solid #ededed;
        width: 50%;
        float: left;
        &:nth-child(odd){
            border-right: 1px solid #ededed;
        }
        .img-icon{
            float: right;
            width: 1.2rem;
            margin-top: -3%;
        }
    }
</style>

