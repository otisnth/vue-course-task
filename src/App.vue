<template>
  <div id="app">
    <BaseHeader :userName="userName" @showAuthModal="showModal"/>
    <main>
      <router-view :listCard="listCard" :itemsInCart="itemsInCart" @addToCart="addToCart" @showAuthModal="showModal"/>
    </main>
    <BaseFooter />
    <AuthModal v-if="showAuthModal" @showAuthModal="showModal"/>
  </div>
</template>

<script>
import BaseFooter from './components/BaseFooter.vue';
import BaseHeader from './components/BaseHeader.vue';
import AuthModal from '@/components/AuthModal.vue';
export default{
  components: {
    BaseHeader,
    BaseFooter,
    AuthModal,
  },
  methods: {
    addToCart(item){
      this.itemsInCart.push(item);
    },
    showModal(){
      this.showAuthModal = !this.showAuthModal;
      console.log("ok");
    }
  },
  props:{
  },
  data(){
    return{
      userName:"Василий",
      showAuthModal: false,
      itemsInCart: [],
      listCard: [
				{
					brand: "Каменный остров",
					title: "Жилет с нашивкой компасом",
					price: "30000",
					description: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
					imgPreview: "st/img1.png",
					imgDetails: [
						"st/img1.png", "st/img2.png", "st/img3.png", "st/img4.png"
					],
					sizes: {"XS":true, "S":true, "M":true, "L":true, "XL":false, "XXL":true}

				},
				{
					brand: "АМИ Париж",
					title: "Полосатая рубашка с коротким рукавом",
					price: "18000",
					description: "В этой модели АМИ Париж представляет смелый взгляд на классический силуэт рубашки",
					imgPreview: "ami/img1.png",
					imgDetails: [
						"ami/img1.png", "ami/img2.png", "ami/img3.png", "ami/img4.png"
					],
					sizes: {"XS":false, "S":false, "M":true, "L":true, "XL":false, "XXL":true}
				},
				{
					brand: "Вквадрате2",
					title: "Укороченные брюки с вышитым логотипом",
					price: "47300",
					description: "Сделано в Италии",
					imgPreview: "quad2/img1.png",
					imgDetails: [
						"quad2/img1.png", "quad2/img2.png", "quad2/img3.png", "quad2/img4.png"
					],
					sizes: {"XS":true, "S":true, "M":true, "L":true, "XL":true, "XXL":true}
				},
				{
					brand: "Акне Студия",
					title: "Полосатый двубортный блейзер",
					price: "19000",
					description: "Лацканы из светло-серой шерсти в вертикальную полоску",
					imgPreview: "akne/img1.png",
					imgDetails: [
						"akne/img1.png", "akne/img2.png", "akne/img3.png", "akne/img4.png"
					],
					sizes: {"XS":true, "S":false, "M":true, "L":true, "XL":false, "XXL":false}
				}
			],
    }
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a, a:visited, a:hover {
  text-decoration: none;
}

body {
  height: 100vh;
  width: 100%;
  position: relative;
}

main {
  flex: 1 0 auto;
}


#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  
  height: 100%;
  width: 100%;
}

</style>
