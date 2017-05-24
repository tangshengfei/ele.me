<template>
    <div class="activity-item">
        <div class="activity-header">
            <span class="line line-left"></span>
            <Icon class="activity-icon" icon="icon-alarm"/>
            <span class="text">限时好礼</span><span class="line line-right"></span>
        </div>
        <ActivitySubTitle title="小积分换豪礼"/>
        <div class="activity-body">
            
        </div>
    </div>
</template>
<script>
    import ActivitySubTitle from "./activitySubTitle";
    import Icon from "../../components/Icon";

    export default {
        props: ['title', 'subTitle', 'data'],
        components: {
            ActivitySubTitle,
            Icon
        }
    }
</script>
<style lang="scss">
    @import "../../style/common.scss";
    $distance: rem(21);
    .activity{
        line-height: 1.2;
        height: 598px;
        background: #fff;
        margin-top: $distance;
    }
    .activity-header{
        padding-top: .52rem;
        text-align: center;
        font-weight: 700;
        color: #333;
        font-size: 0;
        .line{
            display: inline-block;
            margin: .213333rem .093333rem .173333rem;
            border: 1px solid #333;
            width: .4rem;
            height: 0;
            position: relative;
        }
        .line-left{
            &::after{
                right: -.066667rem;
                position: absolute;
                top: -.066667rem;
                content: "";
                background: #333;
                height: .133333rem;
                width: .133333rem;
                border-radius: 50%;
            }
        }
        .text{
            font-size: .48rem;
            padding: 0 rem(10);
        }
        .line-right{
            &::after{
                left: -.066667rem;
                position: absolute;
                top: -.066667rem;
                content: "";
                background: #333;
                height: .133333rem;
                width: .133333rem;
                border-radius: 50%;
            }
        }
    }
    .activity-icon{
        position: relative;
        // top: .083333rem;
        vertical-align: -0.15em;
        line-height: 1;
        width: .48rem;
        height: .48rem;
        color: #f00;
        font-weight: 700;
        font-size: rem(36);
    }
    .activity-body{
        padding: .32rem 0 .4rem .4rem;
        white-space: nowrap;
    }
</style>
