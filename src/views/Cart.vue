<template>
    <div class="main-container">
        <div class="cart-heading">
            <h2 class="header">Корзина</h2>
            <p v-if="emptyCart" class="empty-cart">Ваша корзина пуста</p>
        </div>
    
        <hr v-if="emptyCart">

        <h2 class="offers-header" v-if="emptyCart">Но у нас есть персональные предложения для вас</h2>
        <div class="card-container" v-if="emptyCart">
            <Card v-for="(item, index) in listCard" :key="index" :id="index" class="card-item" :item="item"/>
        </div>

        <div v-else class="cart-container">
            <div class="cart-items">
                <CartItem v-for="(item, index) in this.itemsInCart" :key="index" :id="index" class="cart-item" :item="item"/>
            </div>
            <div class="payment">
                <div class="payment-header">
                    <span>Итого</span>
                    <span class="total">К оплате {{ totalPrice }} руб</span>
                </div>
                <ul class="payment-list">
                    <li v-for="(item, index) in this.itemsInCart" :key="index">
                        <span>{{ item.title }}</span> 
                        <span class="price">{{ item.transformPrice }} руб</span>
                    </li>
                    <li>
                        <span>Доставка</span>
                        <span class="price">{{ this.deliveryPrice }} руб</span>
                    </li>
                </ul>
                <p class="payment-login">
                    Чтобы продолжить оформление заказа, необходимо
                    <span>войти или зарегистрировать аккаунт</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import Card from '@/components/Card.vue';
    export default {
        data() {
            return{
                deliveryPrice: 750, 
            }
        },
        components:{
            CartItem,
            Card,
        },
        props:{
            itemsInCart:Array,
            listCard:Array,
        },
        computed: {
            emptyCart: function(){
                if (this.itemsInCart.length) return false;
                else return true;
            },
            totalPrice: function() {
                let price = +0;
                for (const i of this.itemsInCart) {
                    price += Number(i.price);
                }
                price += Number(this.deliveryPrice);
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
        }
    }
</script>

<style lang="scss" scoped>
.main-container {
	display: grid;
    width: 1920px;
	padding: 32px 160px;
    gap: 16px;
}
.cart-heading {

    .header {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #354153; 
    }
    .empty-cart {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #667085;
    }
}

hr {
    border: 1px solid #EAECF0;
    margin: 24px 0;
}

.offers-header {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #0D1421;
}

.card-container {
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(4, minmax(auto, 400px));
}
.cart-container {
    display: grid;
    grid-template-columns: 1100px auto;
    gap: 24px;
}

.payment {
    display: grid;
    align-content: start;
}
.payment-header {
    padding-bottom: 24px;
    display: grid;
    align-content: start;
    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #354153
    }
    .total {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #0D1421;
    }

    border-bottom: 1px solid #EAECF0;
}

ul {
    list-style: none;

    li {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
        border-bottom: 1px solid #EAECF0;
    }

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;     
    }

    .price {
        font-weight: 500;
        color: #0D1421;
    }

}

.payment-login {
    margin-top: 72px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    span{
        font-weight: 500;
        color: #354153;
        cursor: pointer;
    }
}

</style>