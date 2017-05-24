<template>
    <div class="flex">
        <TopHeader title="订单"/>
        <div class="flex-container">
            <div class="order-list">
                <OrderItem :info="el" v-for="(el, index) in limit(orderList, 0, 10)" :key="'order'+index"/>
            </div>
        </div>
        <FooterNav />
        <!-- 两种动画方案，注意配合children路由使用 -->
        <!--<transition mode="out-in" name="slide-left">
            <router-view class="child-view"></router-view>
        </transition>-->
    </div>
</template>
<script>
    import FooterNav from "@/components/FooterNav";
    import TopHeader from "@/components/TopHeader";
    import OrderItem from "@/components/Order";
    import { filters } from "../../common/mixin";
    import { mapActions, mapState } from "vuex";

    export default {
        data() {
            return {
                title: ''
            }
        },
        components: {
            TopHeader,
            OrderItem,
            FooterNav,
        },
        mixins: [filters],
        computed:{
            ...mapState(['orderList'])
        },
        methods: {
            ...mapActions(['initOrderList'])
        },
        created(){
            this.initOrderList();
        }
    }
</script>
