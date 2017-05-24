<template>
    <div class="order-info">
        <TopHeader title='订单详情'/>
    </div>
</template>
<script>
    import TopHeader from "@/components/TopHeader";
    
    export default {
        props: ['shop'],
        components: {
            TopHeader
        },
        methods: {

        },
        created() {
            console.log('created');
        }
    }
</script>
<style lang="scss" scoped>

</style>

