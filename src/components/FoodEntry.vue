<template>
    <div class="food-entry">
        <div class="wrap">
            <ul class="item">
                <li v-for="(el, index) in limit(data, 0, 8)">
                    <router-link :to="{path: el.path ? el.path : '/shop'}">
                        <img :src="getImgPath(el.image_hash)"/>
                        <span>{{el.name}}</span>
                    </router-link>
                </li>
            </ul>
            <ul class="item">
                <li v-for="(el, index) in limit(data, 8)">
                    <router-link :to="'/food'">
                        <img :src="'static/assets/img/'+(index+9)+'.jpeg'"/>
                        <span>{{el.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="dot">
            <div class="dot-item active"></div>
            <div class="dot-item"></div>
        </div>
    </div>
</template>
<script>
    import { getImgPath, filters } from "../common/mixin";

    export default {
        props: ['data'],
        mixins:[getImgPath, filters]
    }
</script>
<style lang="scss">
    .food-entry{
        min-height: 4.72rem;
        background:#fff;
        width:100%;
        overflow: hidden;
        text-align: center;
        position: relative;
        .wrap{
            // transform: translateX(-100%);
            width:100%;
            height: 4.7rem;
            display: flex;
            a{
                display: block;
                color: #666;
            }
            img{
                width:1.2rem;
                // text-align: center;
            }
            span{
                display: block;
                margin-top: .133333rem;
                color: #666;
                font-size: .32rem;
            }
            .item{
                flex-shrink: 0;
                width:100%;
                // height:100%;
                overflow: hidden;
            }
            li{
                margin-top: .293333rem;
                float: left;
                width: 25%;
            }
        }

        .dot{
            width: 100%;
            position: absolute;
            bottom: 10px;
            left: 0;
        }
        .dot-item{
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background: #000;
            opacity: .2;
            margin: 0 .066667rem;
            &.active{
                background-color: #000;
                opacity: .6;
            }
        }
    }
</style>
