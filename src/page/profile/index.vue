<template>
    <div class="flex">
        <div class="flex-container">
            我是个人中心页面
        </div>
        <FooterNav />
    </div>
</template>
<script>
    import FooterNav from "@/components/FooterNav";
    export default {
        data() {
            return {
                title: ''
            }
        },
        components: {
            FooterNav
        }
    }
</script>
