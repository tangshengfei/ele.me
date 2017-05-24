<template>
    <!-- parts -->
    <div class="parts">
        <div class="entry list" :class="list.length == 3 ? 'list3': list.length == 5 ? 'list5': ''">
            <a v-for="info in list" :href="info.url" class="child">
                <img class="img-icon" :src="getImgPath(info.main_pic_hash)">
                <p class="entry-title" :style="{color:info.title_color}">{{info.title}}</p>
                <p class="entry-tips">{{info.subtitle}}</p>
            </a>
        </div>
        <div class="entry block">
            <a href="#"><img src="/static/assets/discover/part-block.jpeg"></a>
        </div>
    </div>
    <!-- parts -->
</template>
<script>
    import { getImgPath } from '../common/mixin.js';
    export default {
        props: ["list", 'ads'],
        mixins: [getImgPath]
    }
</script>
<style lang="scss" scoped>
    .entry.block{
        margin-top: .28rem;
        height: 2.306667rem;
        overflow: hidden;
        a{
            display: block;
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
    .entry{
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        &.list3{
            position: relative;
            a{
                width: 50%;
            }
            a:nth-child(2),a:nth-child(3) {
                margin-left: 50%;
            }
            a:first-child{
                position: absolute;
                height: 4.613333rem;
                padding: .4rem;
                padding-top: .64rem;
                .img-icon{
                    width: 2rem;
                    margin: .56rem .693333rem 0;
                    position: absolute;
                    bottom: .64rem;
                }
            }
            a:nth-child(3n+1) {
                border-right: 1px solid #ededed;
            }
        }
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