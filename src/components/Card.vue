<template>
    <div class="card">
        <img :src="require(`../assets/img/` + imgPreview)">

        <p class="price">{{ price }} руб</p>
        <div class="card-content">
            <div class="brand">
                Бренд
                <span class="brand-name">{{ brand }}</span>
            </div>
            <p class="title">{{ title }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
           title:{
            type:String
           },
           brand:{
            type:String
           },
           price:{
            type:Number
           },
           imgPreview:{
            type:String
           }
        }
    }
</script>

<style lang="scss" scoped>
.card {
    padding: 24px;
    display: grid;
    gap: 16px;
    
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
    .card-content {
        display: grid;
        gap: 8px;
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