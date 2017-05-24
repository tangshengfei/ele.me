<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#'+icon"></use>
    </svg>
</template>
<style lang="scss" scoped>
    .icon{
        overflow: hidden;
        vertical-align: -0.15em;
    }
</style>
<script>
    export default {
        props: ['color', 'icon']
    }
</script>