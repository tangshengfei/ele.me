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
                        <Raty :count="4.6"/>
                        <div class="count">
                            4.6
                        </div>
                        <div class="total">
                            月售1461单
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
        background:#fff;
        .item{
            padding: 20px 25px;
            // height: 100px;
            border-bottom:1px solid #f3f3f3;
            a{
                display: flex;
                width:100%;
                height: 100%;
            }
        }
        .logo{
            width: 120px;
            height: 120px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            flex:1;
        }
        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .title{
            max-width: 450px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
            font-size: 28px;
            &.level1::before{
                display: inline-block;
                margin-right: 15px;
                background-color: #ffd930;
                color: #52250a;
                content: "\54C1\724C";
                vertical-align: top;
                border-radius: 5px;
                text-align: center;
                font-weight: 700;
                font-size: 20px;
                height: 30px;
                line-height: 30px;
                padding: 0 5px;
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
                // border: 1px solid rgb(221, 221, 221);
                display: inline-block;
                vertical-align: middle;
                margin:0 5px;
            }
        }
    }
    .desc{
        line-height: 20px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        font-size: 20px;
        color: #666;
        font-weight: 500;
    }
    .count {
        margin:0 8px 0 0;
        color: #ff6000;
        font-weight: 600;
    }
    
</style>

