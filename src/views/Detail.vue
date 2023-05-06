<template>
    <div>
        <DetailSlider :imgDetails="this.item.imgDetails"/>

        
        
    </div>
</template>

<script>
import DetailSlider from '@/components/DetailSlider.vue';
    export default {
        components:{
            DetailSlider
        },
        props:{
            item:Object
        },
        created() {
            this.item = this.$route.params["item"];
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
</style>