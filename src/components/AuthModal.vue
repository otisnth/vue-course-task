<template>
    <div class="modal-bg">
        <form class="modal-container">
            <div class="modal-header">
                <div class="succes">
                    <img src="@/assets/img/marker.svg">
                    <span>Почти готово</span>
                </div>
                <button class="btn-close" @click.prevent="showAuthModal"><img src="@/assets/img/close.svg"></button>
            </div>

            <div class="modal-content">
                <div class="header">
                    <h2>Войдите в аккаунт</h2>
                    <p>Введите логин и пароль в форме ниже</p>
                </div>

                <div class="user-data">
                    <div class="username">
                        <label for="username">Имя пользователя</label>
                        <input type="text" name="username" id="username" placeholder="Введите имя пользователя">
                    </div>

                    <div class="password">
                        <label for="password">Пароль</label>
                        <input type="password" name="password" id="password" placeholder="Введите пароль">
                    </div>

                    <a href="#" class="password-recovery">Восстановить пароль</a>
                </div>

                <p class="register">
                    <span>Нет аккаунта?</span>
                    <a href="#">Зарегистрироваться</a>
                </p>
            </div>

            <hr>

            <button class="btn" @click.prevent="">Войти</button>

        </form>
    </div>
</template>

<script>
    export default {
        methods:{
            showAuthModal(){
                this.$emit("showAuthModal");
            }
        }
    }
</script>

<style lang="scss" scoped>

    

    .modal-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        width: 100%;
        height: 100%;
        background: rgba(13, 20, 33, 0.4);
    }

    .modal-container {
        position: absolute;
        top: 88px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 510px;
        // height: 612px;
        background: #FFFFFF;
        border-radius: 16px;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 24px;
        gap: 40px;

    }
    .modal-header {
        border-bottom: 1px solid #EAECF0;
        padding-bottom: 16px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        .succes {
            display: flex;
            gap: 10px;
            align-items: center;
            img{
                padding: 12px;
                width: 48px;
                height: 48px;
                border: 1px solid #EAECF0;
                border-radius: 10px;
            }
            span{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;
                color: #0D1421;             
            }
        }
        button {
            background: none;
            border: none;
            justify-self: end;
            align-self: start;
            cursor: pointer;
        }
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        max-width: 343px;
        gap: 24px;
        .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            h2{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 40px;
                color: #0D1421;
            }
            p{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 28px;
                color: #667085;             
            }
        }

        .user-data {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .username, .password {
            display: flex;
            flex-direction: column;
            gap: 4px;
            label {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #354153;
            }
            input {
                padding: 10px 16px;
                background: #FFFFFF;
                border: 1px solid #EAECF0;
                border-radius: 8px;
                outline: none;
            }
        }
        .password-recovery {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #0D1421;
        }
        .register {
            display: flex;
            gap: 4px;
            justify-content: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #667085;         
            a{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #0D1421;
            }
        }
    }

    hr {
        border: 1px solid #EAECF0;
        width: 100%;
    }

    .btn {
        width: 100%;
        text-align: center;
        background: #0D1421;
        border-radius: 8px;
        padding: 10px 18px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        outline: none;
        border-color: transparent;
        cursor: pointer;
    }

</style>