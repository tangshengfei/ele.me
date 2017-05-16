<template>
    <ul class="shop-list">
        <li v-for="(el, index) in shopList" class="item">
            <router-link :to="'/shopInfo'">
                <div class="logo">
                    <img src="/static/assets/shop/logo.jpeg">
                </div>
                <div class="info">
                    <div class="header">
                        <h3 class="title level1">吉祥馄饨（新昌店）</h3>
                        <div class="labels">
                            <span>保</span>
                            <span>准</span>
                        </div>
                    </div>
                    <div class="desc">
                        <div class="desc-text">
                            <Raty :count="4.6"/>
                            <div class="count">
                                4.6
                            </div>
                            <div class="total">
                                月售1461单
                            </div>
                        </div>
                        <div class="desc-identyfy">
                            <span>准时达</span>
                            <span class="identyfy-way">蜂鸟专送</span>
                        </div>
                    </div>
                    <div class="desc2">
                        <div class="price-info">
                            <span>¥20起送</span>
                            <span>配送费¥5</span>
                            <span>¥28/人</span>
                        </div>
                        <div class="disinfo">
                            <span>880m</span>
                            <span>27分钟</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
    import Raty from "@/components/Raty";
    export default {
        data() {
            return {
                shopList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            }
        },
        components: {
            Raty
        }
    }
</script>
<style lang="scss" scoped>
    .shop-list{
            background-color: #fff;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…J6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==);
            background-size: 100% auto;
        .item{
            font-size: .293333rem;
            border-bottom:1px solid #eee;
            a{
                justify-content: space-between;
                display: flex;
                width:100%;
                height: 100%;
            }
        }
        .logo{
            padding: .4rem .266667rem;
            width: 1.6rem;
            height: 1.6rem;
            img{
                border-radius: .053333rem;
                width: 100%;
                height: 100%;
            }
        }
        .info{
            flex:1;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            padding: .4rem .266667rem .4rem 0;
        }
        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .title{
            max-width: 5rem;
            height: .426667rem;
            color: #333;
            font-weight: 700;
            font-size: .4rem;
            &.level1::before{
                margin-right: .133333rem;
                padding: 0 .066667rem;
                height: .4rem;
                border-radius: .053333rem;
                background-color: #ffd930;
                color: #52250a;
                content: "\54C1\724C";
                vertical-align: top;
                text-align: center;
                white-space: nowrap;
                font-weight: 700;
                font-size: .293333rem;
                line-height: .4rem;
            }
        }
        .labels{
            display: flex;
            justify-content: flex-end;
            color: #999;
            font-size: 18px;
            height: 30px;
            line-height: 30px;
            >span{
                margin-left: .066667rem;
                font-size: .266667rem;
                font-style: normal;
                line-height: 1;
                height: .293333rem;
                display: inline-block;
                box-sizing: border-box;
                text-align: center;
                // border: 1px solid;
                border-radius: .04rem;
            }
        }
    }
    .desc{
        margin-top: .2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        color: #666;
        font-weight: 500;
    }
    .desc-text{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .count {
        font-size: .293333rem;
        margin: 0 .106667rem;
        color: #ff6000;
    }
    .total{
        font-size: .293333rem;
        color: #666;
        font-weight: 500;
    }
    .desc-identyfy{
        display: flex;
        
        span{
            padding: 0 .053333rem;
            border: 1px solid #44a5ff;
            border-radius: .053333rem;
            background-color: #fff;
            color: #2395ff;
            font-size: .266667rem;
            line-height: .346667rem;
        }
        span:not(:last-child){
            margin-right: .08rem;
        }
        .identyfy-way{
            background-color: #2395ff;
            color: #fff;
        }
    }
    .desc2{
        margin-top: .226667rem;
        line-height: .32rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .price-info{
        color: #666;
        display: flex;
        align-items: center;
        span:nth-of-type(2){
            overflow: hidden;
            max-width: 2.666667rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            &::before,&::after{
                margin: 0 .08rem;
                color: #ddd;
                content: "/";
            }
        }
        
    }
    .disinfo{
        display: flex;
        align-items: center;
        span:first-child{
            color: #999;
        }
        span:last-child{
            color: #2395ff;
            &::before{
                margin: 0 .08rem;
                color: #ddd;
                content: "/";
            }
        }
    }
</style>

