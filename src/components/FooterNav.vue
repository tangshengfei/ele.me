<template>
    <nav class="footer-nav">
        <ul>
            <li>
                <router-link :to="{path: '/home', query: { level: 1 }}">
                    <Icon icon="icon-eleme"/>
                    <!--<i class="icon">&#xe600;</i>-->
                    <span class="text">外卖</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{path: '/discover', query: { level: 2 }}">
                    <Icon icon="icon-discover"/>
                    <span class="text">发现</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{path: '/order', query: { level: 3 }}">
                    <Icon icon="icon-order"/>
                    <span class="text">订单</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{path: '/profile', query: { level: 4 }}">
                    <Icon icon="icon-profile"/>
                    <span class="text">我的</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
    import Icon from "./Icon";
    export default {
        components: {
            Icon
        },
        computed: {
            level() {
                return this.$store.state.level;
            }
        }
    }
</script>
