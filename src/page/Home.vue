<template>
    <div class="container flex">
        <div class="flex-container">
            <HomeHeader />
            <FoodEntry />
            <h3 class="home-title">推荐商家</h3>
            <ShopList :data="shopList"/>
        </div>
        <FooterNav />
    </div>
</template>
<script>
    import HomeHeader from "@/components/Header";
    import FoodEntry from "@/components/FoodEntry"
    import ShopList from "@/components/ShopList"
    import FooterNav from "@/components/FooterNav";
    import { mapActions, mapState } from "vuex";
    import * as actions from "../store/mutations-type";

    export default {
        data() {
            return {
                title: ''
            }
        },
        components: {
            HomeHeader,
            FoodEntry,
            ShopList,
            FooterNav
        },
        computed: {
            ...mapState(['shopList'])
        },
        methods: {
            ...mapActions([actions.INIT_SHOP_LIST])
        },
        created(){
            this[actions.INIT_SHOP_LIST]();
            // console.log(this[actions.INIT_SHOP_LIST]);
        }
    }
</script>

