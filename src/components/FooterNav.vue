<template>
    <nav class="footer-nav">
        <ul>
            <li>
                <router-link to="home">
                    <Icon icon="icon-eleme"/>
                    <!--<i class="icon">&#xe600;</i>-->
                    <span class="text">外卖</span>
                </router-link>
            </li>
            <li>
                <router-link to="discover">
                    <Icon icon="icon-discover"/>
                    <span class="text">发现</span>
                </router-link>
            </li>
            <li>
                <router-link to="order">
                    <Icon icon="icon-order"/>
                    <span class="text">订单</span>
                </router-link>
            </li>
            <li>
                <router-link to="profile">
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
        }
    }
</script>
