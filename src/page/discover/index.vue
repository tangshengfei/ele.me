<template>
    <div class="flex">
        <TopHeader :title="'发现'"/>
        <div class="flex-container discover">
            <DiscoverEntry :list="entrys || []" :ads="disAds || []"/>
            <!--activity-->
            <div class="activity">
                <!-- 美食热推活动 -->
                <template v-if="false">
                    <div class="activity-header">
                        <span class="line line-left"></span>
                        <svg class="activity-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nice">
                                <svg viewBox="0 0 34 33" id="nice" width="100%" height="100%"><g fill="#F12C2C" fill-rule="evenodd"><path d="M19.1 10s.404-1.959.685-3.294l.068-.323a472.237 472.237 0 0 1 .83-3.832l.077-.352C21.016 1.036 20.194 0 19.01 0H14.49c-.625 0-1.284.377-1.606.915l-5.742 9.57L8 10H2.003A1.995 1.995 0 0 0 0 11.999V31C0 32.106.9 33 2.003 33h23c1.548 0 3.082-1.157 3.507-2.645l4.63-16.204C33.776 11.923 32.32 10 30 10H19.1zM18 12h12c.993 0 1.488.653 1.217 1.601l-4.63 16.205c-.18.629-.929 1.194-1.584 1.194h-23L2 11.999C2 11.996 8 12 8 12h.566l.291-.486 5.743-9.57c-.037.061-.028.056-.109.056h4.518c-.1 0-.22-.152-.202-.233l-.078.354a513.863 513.863 0 0 0-.832 3.848l-.069.325c-.284 1.349-.51 2.46-.657 3.255-.087.465-.146.818-.177 1.058a2.394 2.394 0 0 0-.026.41c.004.078.004.078.027.21.039.185.039.185.349.563.717.292.656.21.656.21z"></path><path d="M7 10h2v22H7z"></path></g></svg>
                            </use>
                        </svg>
                        <span class="text">美食热推</span>
                        <span class="line line-right"></span>
                    </div>
                    <ActivitySubTitle title="你的口味我都懂得"/>
                    <div class="activity-body">
                        
                    </div>
                </template>
                <!-- 美食热推活动 -->
                <!-- 限时好礼 -->
                <Activity title="限时好礼" subTitle="小积分换豪礼" :data="[]"/>
                <!-- 限时好礼 -->
            </div>
            <!--activity-->
        </div>
        <FooterNav />
    </div>
</template>
<script>
    import FooterNav from "@/components/FooterNav";
    import TopHeader from "@/components/TopHeader";
    import DiscoverEntry from "@/components/DiscoverEntry";
    import ActivitySubTitle from "./activitySubTitle";
    import Activity from "./activity";
    import { mapActions, mapState } from "vuex";
    import * as actions from "../../store/mutations-type";

    export default {
        data() {
            return {
                title: ''
            }
        },
        computed: {
            ...mapState(['entrys', 'disAds'])
        },
        components: {
            ActivitySubTitle,
            DiscoverEntry,
            TopHeader,
            FooterNav,
            Activity,
        },
        created() {
            this[actions.INIT_DISCOVER]();
        },
        methods: {
            ...mapActions([actions.INIT_DISCOVER])
        },
        filters: {
            cutNumber ( num ) {
                return (num).toFixed(2);
            }
        }
    }
</script>
<style lang="scss">
    @import "../../style/common.scss";
    $distance: rem(21);
    .discover{
        padding-bottom: rem(10)
    }
    .parts{
        margin-bottom: $distance;
    }
</style>

