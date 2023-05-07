<template>
    <div class="detail-container">
        <DetailSlider :imgDetails="this.item.imgDetails"/>

        <div class="detail-content">
            <div class="detail-content_header">
                <div class="heading">
                    <p class="brand">{{ this.item.brand }}</p>
                    <p class="title">{{ this.item.title }}</p>
                </div>

                <p class="description">{{ this.item.description }}.</p>
                <p class="price">{{ this.item.transformPrice }} руб</p>

            </div>

            <div class="detail-content_action">
                <div class="btn btn-second">
                    Выберите размер
                    <img src="@/assets/img/arrow.svg">
                </div>
                <div class="btn btn-primary">
                    Добавить в корзину
                </div>
            </div>

        </div>
        
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

    .detail-container {
        display: grid;
	    max-width: 1920px;
	    padding: 32px 160px;
        gap: 64px;
        grid-template-columns: min-content auto;
    }

    .detail-content {
        display: grid;
        align-content: start;
        gap: 32px;

        .detail-content_header {
            display: grid;
            align-content: start;
            gap: 40px;

            .brand {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 40px;
                color: #354153;
            }
            .title {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 30px;
                color: #667085;
            }

            .description {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 30px;
                color: #667085;
            }

            .price {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
                line-height: 48px;
                color: #0D1421;
            }

        }
        .detail-content_action {
            display: grid;
            justify-content: start;
            align-content: start;
            gap: 16px;
        }

        .btn {
            cursor: pointer;
            display: flex;
            gap: 8px;
            border-radius: 8px;
            padding: 12px 16px;
            justify-content: center;
            align-items: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
        }
        .btn-primary {
            background: #0D1421;
            color: #FFFFFF;
        }

        .btn-second {
            background: #FFFFFF;
            border: 1px solid #EAECF0;
            color: #354153;
        }

    }

</style>