<template>
    <div class="container flex">
        <div class="flex-container">
            <HomeHeader />
            <FoodEntry />
            <h3 class="home-title">推荐商家</h3>
            <ShopList />
        </div>
        <FooterNav />
    </div>
</template>
<script>
    import HomeHeader from "@/components/Header";
    import FoodEntry from "@/components/FoodEntry"
    import ShopList from "@/components/ShopList"
    import FooterNav from "@/components/FooterNav";

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
        }
    }
</script>

