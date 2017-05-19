<template>
    <div>
        <ShopList :keywords='keywords'/>
    </div>
</template>
<script>
    import ShopList from "@/components/ShopList";
    export default {
        props: ['keywords'],
        components: {
            ShopList
        }
    }
</script>
