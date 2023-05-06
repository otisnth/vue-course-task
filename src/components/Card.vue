<template>
    <div class="card" @mouseover="cardHovered = true" @mouseleave="cardHovered = false">
        <router-link :to="{name:`detail`, params:{item: this.item, code: this.id}}">
            <div class="card-img">
                <img :src="require(`../assets/img/` + item.imgPreview)">
                <div class="card-description" v-if="cardHovered">
                    <p class="card-description_brand">{{ item.brand }}</p>
                    <p class="card-description_text">{{ item.description }}</p>
                </div>
            </div>

            <p class="price">{{ item.price }} руб</p>
            <div class="card-content">
                <div class="brand">
                    Бренд
                    <span class="brand-name">{{ item.brand }}</span>
                </div>
                <p class="title">{{ item.title }}</p>
            </div>
        </router-link>
        

        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                cardHovered: false
            }
        },
        props:{
            id:Number,
            item:Object,
        },
        methods:{
            openDetail(id){
                this.$route.params.push(this.item);
                this.$router.push('catalog/' + id);
            }
        },
        mounted(){
            this.item.price = this.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
    }
</script>

<style lang="scss" scoped>
.card {
    padding: 24px;
    display: grid;
    gap: 16px;
    
    .card-img {
        position: relative;
    }

    .card-description {
        position: absolute;
        bottom: 0;
        left: calc(50% - 352px/2);
        width: 352px;
        display: grid;
        padding: 32px 20px;
        gap: 16px;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
    }

    .card-description_brand {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #354153;
    }

    .card-description_text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #354153;
    }

    img {
        width: 352px;
    }

    .price {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #0D1421;
    }

   
    .card-content {
        display: grid;
        gap: 8px;
    }

    .brand {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #667085;
    }

    .brand-name {
        color: #354153;
    }

    .title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #667085;
    }

}

</style>