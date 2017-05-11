<template>
    <ul class="shop-list">
        <li v-for="(el, index) in shopList" class="item">
            <router-link :to="'/shopInfo'"></router-link>
        </li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                shopList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            }
        }
    }
</script>
<style lang="scss">
    .shop-list{
        background:#fff;
        .item{
            padding: 10px 25px;
            height: 100px;
            border-bottom:1px solid #f3f3f3;
            a{
                display: block;
                width:100%;
                height: 100%;
            }
        }
    }
</style>

