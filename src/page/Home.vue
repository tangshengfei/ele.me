<template>
    <div class="flex container">
        <div class="flex-container">
            <HomeHeader />
            <FoodEntry :data="foodEntries || []"/>
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
    import axios from "axios";

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
            ...mapState(['shopList', 'foodEntries'])
        },
        methods: {
            ...mapActions([actions.INIT_SHOP_LIST, actions.INIT_ENTRIES])
        },
        created(){
            this[actions.INIT_SHOP_LIST]();
            this[actions.INIT_ENTRIES]();
            
            (async function (){
                const { data } = await axios.get("/api/shopping/restaurants?latitude=31.23037&longitude=121.473701&offset=0&limit=20&extras[]=activities&terminal=h5");
                console.log(data);
            })();
            
        }
    }
</script>

