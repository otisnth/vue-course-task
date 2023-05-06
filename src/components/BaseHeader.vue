<template>
    <header>
        <div class="container">
            <div class="brand">
                <img src="@/assets/img/logo.svg" class="logo">
                <h1 class="name">Курсовой макет</h1>
            </div>
            
            <div class="action">
                <button class="profile">
                    <img src="@/assets/img/profile.svg">
                    <p class="username" v-if="userName">{{ userName }}</p>
                </button>
                <button><img src="@/assets/img/cart.svg"></button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            userName: {
                type:String,
            }
        }
        
    }
</script>

<style lang="scss" scoped>

header {
    border-bottom: 1px solid #EAECF0;
    height: min-content;
    .container {
        max-width: 1920px;
        padding: 20px 160px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .brand {
        display: grid;
        grid-template-columns: min-content auto;
        gap: 16px;
        align-items: center;
    }

    .logo {
        width: 32px;
        height: 32px;
    }

    .name {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #354153;
    }

    .action {
        padding: 10px;
        display: flex;
        gap: 8px;
        justify-self: end;

        button {
            cursor: pointer;
            background-color: #fff;
            border: none;

            img {
                height: 18px;
                width: 18px;
            }
        }

        .profile {
            display: flex;
            gap: 8px;
        }

        .username {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            color: #354153;         
        }
    }
}

</style>