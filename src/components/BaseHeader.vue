<template>
    <header>
        <div class="container">
            <router-link to="/">
                <div class="brand">
                <img src="@/assets/img/logo.svg" class="logo">
                <h1 class="name">Курсовой макет</h1>
            </div>
            </router-link>
            
            
            <div class="action">
                <button class="profile" @click="showAuthModal">
                    <img src="@/assets/img/profile.svg">
                    <p class="username" v-if="userName">{{ userName }}</p>
                </button>
                <router-link to="/cart">
                    <button><img src="@/assets/img/cart.svg"></button>
                </router-link>
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
        },
        methods:{
            showAuthModal(){
                this.$emit("showAuthModal");
            },
        }
        
    }
</script>

<style lang="scss" scoped>

header {
    border-bottom: 1px solid #EAECF0;
    height: min-content;
    width: 100%;
    display: flex;
    justify-content: center;

    .container {
        max-width: 1920px;
        width: 100%;
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