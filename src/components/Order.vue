<template>
    <div class="ordercard">
        <router-link class="ordercard-body" :to="{ name:'orderInfo', query: {orderId: info.id}}">
            <div class="ordercard-avatar">
                <img :src="getImgPath(info.restaurant_image_hash)">
            </div>
            <div class="ordercard-content">
                <div class="ordercard-head">
                    <div class="title">
                        <p class="name">
                            <span class="content">{{info.restaurant_name}}</span>
                            <Icon icon="icon-right"/>
                        </p>
                        <p class="status" style="">{{info.status_bar.title}}</p>
                    </div>
                    <div class="time">
                        {{info.formatted_created_at}}
                    </div>
                </div>
                <div class="ordercard-detail">
                    <p class="detail">
                        <span class="prodname">
                            {{info.basket.group[0][0].name}}<template v-if="info.basket.group[0].length > 1">等{{info.basket.group[0].length}}件商品</template>
                        </span>
                        <span></span>
                    </p>
                    <p class="price">￥{{info.total_amount | cutNumber}}</p>
                </div>
            </div>
        </router-link>
        <div class="ordercard-bottom">
            <button class="cardbutton">再来一单</button>
            <button class="cardbutton alert" v-if="info.operation_rate">评价得{{info.rated_point}}积分</button>
        </div>
    </div>
</template>
<script>
    import Icon from "./Icon";
    import { getImgPath, filters} from "../common/mixin.js";
    export default {
        props: ['info'],
        mixins: [getImgPath, filters],
        components: {
            Icon
        }
    }
</script>
<style lang="scss" scoped>
    .ordercard{
        display: block;
        margin-top: .266667rem;
        background-color: #fff;
        padding: .373333rem 0 0 .4rem;
    }
    .ordercard-body,.ordercard-bottom{
        display: flex;
    }
    .ordercard-avatar{
        padding-right: .266667rem;
        flex: none;
        img{
            border-radius: .053333rem;
            border: 1px solid #eee;
            width: .853333rem;
            height: .853333rem;
        }
    }
    .ordercard-content{
        flex: 1;
        display: block;
        width: 0;
    }
    .ordercard-head{
        border-bottom: 1px solid #eee;
        padding-right: .346667rem;
        padding-bottom: .266667rem;
        .title, .name{
            display: flex;
            align-items: center;
        }
        .title{
            justify-content: space-between;
        }
        .name{
            font-size: .426667rem;
            line-height: 1.5em;
            color: #333;
            .content{
                display: inline-block;
                max-width: 10em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            svg{
                margin-left: .133333rem;
                width: .133333rem;
                height: .186667rem;
            }
        }
        .time{
            font-size: .293333rem;
            color: #999;
        }
        .status{
            font-size: .346667rem;
            text-align: right;
            color: #333;
            max-width: 10em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .ordercard-detail{
        display: flex;
        justify-content: space-between;
        padding: .4rem .346667rem .4rem 0;
        .detail{
            font-size: .346667rem;
            color: #666;
            display: flex;
            align-items: center;
        }
        .prodname{
            display: inline-block;
            max-width: 6.133333rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price{
            -webkit-flex-basis: 1.6rem;
            font-size: .346667rem;
            flex-basis: 1.6rem;
            text-align: right;
            font-weight: 700;
            color: #333;
        }
    }
    .ordercard-bottom{
        border-top: 1px solid #eee;
        padding: .266667rem .426667rem;
        justify-content: flex-end;
        .cardbutton{
            padding: .133333rem .266667rem;
            border: 1px solid #3190e8;
            border-radius: .053333rem;
            background-color: transparent;
            outline: none;
            font-size: .346667rem;
            color: #3190e8;
            margin-left: .2rem;
            &.alert{
                color: #ff6000;
                border-color: #ff6000;
            }
        }
    }
</style>