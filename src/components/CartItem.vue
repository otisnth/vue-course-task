<template>
    <div class="cart-item-container">
        <img :src="require(`../assets/img/` + item.imgPreview)">
        <div class="cart-item-content">
            <p class="price">{{ item.transformPrice }} руб</p>
            <div class="info">

                <p class="brand">
                    Бренд
                    <span>{{ item.brand }}</span>
                </p>

                <p class="description">{{ item.description }}</p>

                <div class="size">
                    <p>Размер</p>
                    <span>{{ item.selectedSize }}</span>
                    <div class="btn select-size" @click="this.showListSizes" v-click-outside="hideList">
                        Изменить
                        <SelectList v-if="showSizes" :selectedSize="this.item.selectedSize" :sizes="this.item.sizes" @selectSize="selectSize"/>
                    </div>
                </div>
            </div>
            <hr>
            <p class="delivery">Доставка займёт от 5 до 10 дней</p>
        </div>
        
    </div>
</template>

<script>
import SelectList from './SelectList.vue';
import ClickOutside from 'vue-click-outside'
    export default {
        data(){
            return {
                showSizes: false,
            }
        },
        components:{
            SelectList
        },
        props:{
            item:Object,
        },
        methods:{
            showListSizes(){
                this.showSizes = !this.showSizes;
            },
            hideList() {
                if(this.showSizes) this.showSizes = !this.showSizes;
            },
            selectSize(selectedSize){
                this.item.selectedSize = selectedSize;
            },
        },
        directives: {
            ClickOutside
        }
    }
</script>

<style lang="scss" scoped>
.cart-item-container{
    padding: 24px;
    display: grid;
    grid-template-columns: 240px auto;
    gap: 32px;
    border-right: 1px solid #EAECF0;

    img {
        width: 240px;
    }

    .cart-item-content {
        display: grid;
        align-content: start;
        gap: 16px;

        .price {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: #0D1421;
        }

        .info {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #667085;
            span{
                color: #354153;
            }

            .description {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: #667085;
            }
            .size {
                display: flex;
                gap: 4px;
            }

            .select-size {
                text-decoration: underline;
                cursor: pointer;
                position: relative;
            }
        }

        hr {
            border: 1px solid #EAECF0;
        }
        .delivery {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: #0D1421;
        }
    }

}
</style>