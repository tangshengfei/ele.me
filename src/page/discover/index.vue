<template>
    <div class="flex discover">
        <TopHeader :title="'发现'"/>
        <div class="flex-container">
            <!-- parts -->
            <div class="parts">
                <div class="entry list">
                    <a href="#" class="child">
                        <img class="img-icon" src="/static/assets/discover/part-icon1.jpeg">
                        <p class="entry-title" style="color:#FF9700">积分商城</p>
                        <p class="entry-tips">0元好物在这里！</p>
                    </a>
                    <div class="child">
                        <a href="#">
                            <img class="img-icon" src="/static/assets/discover/part-icon2.jpeg">
                            <p class="entry-title" style="color:#F5785D">美味爆料</p>
                            <p class="entry-tips">承包你的小饥饿！</p>
                        </a>
                        <a href="#">
                            <img class="img-icon" src="/static/assets/discover/part-icon3.jpeg">
                            <p class="entry-title" style="color: #1BA9E1;">推荐有奖</p>
                            <p class="entry-tips">5元现金拿不停</p>
                        </a>
                    </div>
                </div>
                <div class="entry block">
                    <a href="#"><img src="/static/assets/discover/part-block.jpeg"></a>
                </div>
            </div>
            <!-- parts -->
            <!--activity-->
            <div class="activity">
                <div class="activity-header">
                    <span class="line line-left"></span>
                    <div class="activity-icon">
                        <svg class="activity-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nice">
                                <svg viewBox="0 0 34 33" id="nice" width="100%" height="100%"><g fill="#F12C2C" fill-rule="evenodd"><path d="M19.1 10s.404-1.959.685-3.294l.068-.323a472.237 472.237 0 0 1 .83-3.832l.077-.352C21.016 1.036 20.194 0 19.01 0H14.49c-.625 0-1.284.377-1.606.915l-5.742 9.57L8 10H2.003A1.995 1.995 0 0 0 0 11.999V31C0 32.106.9 33 2.003 33h23c1.548 0 3.082-1.157 3.507-2.645l4.63-16.204C33.776 11.923 32.32 10 30 10H19.1zM18 12h12c.993 0 1.488.653 1.217 1.601l-4.63 16.205c-.18.629-.929 1.194-1.584 1.194h-23L2 11.999C2 11.996 8 12 8 12h.566l.291-.486 5.743-9.57c-.037.061-.028.056-.109.056h4.518c-.1 0-.22-.152-.202-.233l-.078.354a513.863 513.863 0 0 0-.832 3.848l-.069.325c-.284 1.349-.51 2.46-.657 3.255-.087.465-.146.818-.177 1.058a2.394 2.394 0 0 0-.026.41c.004.078.004.078.027.21.039.185.039.185.349.563.717.292.656.21.656.21z"></path><path d="M7 10h2v22H7z"></path></g></svg>
                            </use>
                        </svg>
                    </div>
                    <span class="text">美食热推</span>
                    <span class="line line-right"></span>
                </div>
                <p class="activity-sub-title">你的口味我都懂得</p>
                <div class="activity-body">

                </div>
            </div>
            <!--activity-->
        </div>
        <FooterNav />
    </div>
</template>
<script>
    import FooterNav from "@/components/FooterNav";
    import TopHeader from "@/components/TopHeader";

    export default {
        data() {
            return {
                title: ''
            }
        },
        components: {
            TopHeader,
            FooterNav
        }
    }
</script>
<style lang="scss">
    $distance: 23px;
    .parts{
        margin-bottom: $distance;
        .list{
            background: #fff;
            height: 345px;
            display: flex;
        }
        .child:first-child{
            border-right: 1px solid #ededed;
            padding:52px 30px 35px;
            position: relative;
            .img-icon{
                width: 150px;
                position: absolute;
                bottom:-3px;
                margin:44px 52px 50px;
            }
        }
        .block{
            height: 173px;
            overflow: hidden;
            margin-top: $distance;
            img{
                width: 100%;
            }
        }
        .entry-title{
            font-size: 36px;
            font-weight: 400;
        }
        .entry-tips{
            margin-top: 18px;
            color: #999;
            font-weight: 400;
            font-size: 24px;
        }
        .child{
            p{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            box-sizing: border-box;
            
            height: 100%;
            width: 50%;
            a:first-child{
                border-bottom: 1px solid #ededed;
            }
            a{
                padding: 52px 30px;
                box-sizing: border-box;
                overflow: hidden;
                position: relative;
                display: block;
                height: 50%;
                width: 100%;
            }
            .img-icon{
                margin-top: -4%;
                width: 90px;
                float: right;
            }
        }
    }
    .activity{
        height: 598px;
        background: #fff;
        margin-top: $distance;
    }
    .activity-header{
        height: 85px;
        text-align: center;
        .line{
            display: inline-block;
            height: 1px;
            width:31px;
            background: #333;
        }
        .text{
            font-size: 34px;
            color: #333;
            font-weight: 500;
        }
    }
    .activity-icon{
        display: inline-block;
        vertical-align: middle;
        width: 34px;
    }
</style>

