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
        background:#fff;
        width:100%;
        overflow: hidden;
        text-align: center;
        position: relative;
        .wrap{
            // transform: translateX(-100%);
            width:100%;
            padding-bottom: 70px;
            display: flex;
            a{
                display: block;
                color: #666;
            }
            img{
                width:90px;
                // text-align: center;
            }
            span{
                margin-top: 10px;
                display: block;
            }
            .item{
                flex-shrink: 0;
                width:750px;
                height:100%;
                overflow: hidden;
            }
            li{
                margin-top: 30px;
                float: left;
                width: 25%;
            }
        }

        .dot{
            width: 100%;
            height: 20px;
            position: absolute;
            bottom: 10px;
            left: 0;
        }
        .dot-item{
            display: inline-block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #999;
            margin: 5px 5px;
            &.active{
                background: #666;
            }
        }
    }
</style>
