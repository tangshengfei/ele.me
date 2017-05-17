<template>
    <div class="food-entry">
        <div class="wrap">
            <ul class="item">
                <li v-for="(el, index) in list1">
                    <router-link :to="el.path ? el.path : '/shop'">
                        <img :src="'static/assets/img/'+(index+1)+'.jpeg'"/>
                        <span>{{el.text}}</span>
                    </router-link>
                </li>
            </ul>
            <ul class="item">
                <li v-for="(el, index) in list2">
                    <router-link :to="'/food'">
                        <img :src="'static/assets/img/'+(index+9)+'.jpeg'"/>
                        <span>{{el.text}}</span>
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
    export default {
        data() {
            return {
                list1: [
                    {
                        path: '',
                        imgSrc:'',
                        text:'美食'
                    },
                    {
                        path: '',
                        imgSrc:'',
                        text:'甜品饮品'
                    },
                    {
                        path: '',
                        imgSrc:'',
                        text:'商超便利'
                    },
                    {
                        path: '/breakfirst',
                        imgSrc:'',
                        text:'预定早餐'
                    },
                    {
                        path: '',
                        imgSrc:'',
                        text:'果鲜生疏'
                    },
                    {
                        path: '',
                        imgSrc:'',
                        text:'新店特惠'
                    },
                    {
                        path: '',
                        imgSrc:'',
                        text:'准时达'
                    },
                    {
                        path: '',
                        imgSrc:'',
                        text:'下午茶'
                    }
                ],
                list2: [
                    {
                        imgSrc:'',
                        text:'土豪推荐'
                    },
                    {
                        imgSrc:'',
                        text:'汉堡薯条'
                    },
                    {
                        imgSrc:'',
                        text:'包子粥店'
                    },
                    {
                        imgSrc:'',
                        text:'鲜花蛋糕'
                    },
                    {
                        imgSrc:'',
                        text:'麻辣烫'
                    },
                    {
                        imgSrc:'',
                        text:'川湘菜'
                    },
                    {
                        imgSrc:'',
                        text:'披萨意面'
                    },
                    {
                        imgSrc:'',
                        text:'日韩料理'
                    }
                ]
            }
        }
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
