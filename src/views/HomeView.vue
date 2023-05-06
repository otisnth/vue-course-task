<template>
  <div class="main-container">

	<div class="card-container">
		<Card v-for="(item, index) in listCard" :key="index" class="card-item" :title="item.title" :brand="item.brand" :imgPreview="item.imgPreview" :price="item.price"/>
	</div>
    
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  name: 'HomeView',
  components: {
	Card
  },
	data() {
		return {
			listCard: [
				{
					brand: "Каменный остров",
					title: "Жилет с нашивкой компасом",
					price: "30000",
					description: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
					imgPreview: "st/img1.png",
					imgDetails: [
						"st/img1.png", "st/img2.png", "st/img3.png", "st/img4.png"
					]
				},
				{
					brand: "АМИ Париж",
					title: "Полосатая рубашка с коротким рукавом",
					price: "18000",
					description: "В этой модели АМИ Париж представляет смелый взгляд на классический силуэт рубашки",
					imgPreview: "ami/img1.png",
					imgDetails: [
						"ami/img1.png", "ami/img2.png", "ami/img3.png", "ami/img4.png"
					]
				},
				{
					brand: "Вквадрате2",
					title: "Укороченные брюки с вышитым логотипом",
					price: "47300",
					description: "Сделано в Италии",
					imgPreview: "quad2/img1.png",
					imgDetails: [
						"quad2/img1.png", "quad2/img2.png", "quad2/img3.png", "quad2/img4.png"
					]
				},
				{
					brand: "Акне Студия",
					title: "Полосатый двубортный блейзер",
					price: "19000",
					description: "Лацканы из светло-серой шерсти в вертикальную полоску",
					imgPreview: "akne/img1.png",
					imgDetails: [
						"akne/img1.png", "akne/img2.png", "akne/img3.png", "akne/img4.png"
					]
				}
			],

		}	
	}
}
</script>

<style lang="scss" scoped>

.card-container {
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(4, minmax(auto, 400px));
}

</style>
