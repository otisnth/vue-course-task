<template>
  <div class="main-container">

	<div class="action-header">
		<FilterButton @filter="filter"/>
		<SortButton class="sort-btn" @sort="sort"/>
	</div>

	<div class="card-container">
		<Card v-for="(item, index) in rangedList" :key="index" :id="index" class="card-item" :item="item"/>
	</div>
    
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import FilterButton from '@/components/FilterButton.vue';
import SortButton from '@/components/SortButton.vue';

export default {
  name: 'HomeView',
  components: {
	Card,
	FilterButton,
	SortButton
  },
	data() {
		return {
			currentSort: "По умолчанию",
			currentFilter: [],

		}	
	},
	methods:{
		sort(el){
			this.currentSort = el
		},
		filter(currentFilter){
			this.currentFilter = currentFilter;
		}
	},
	props:{
		listCard:Array,
	},
	computed: {
            rangedList: function() {
				let list = this.listCard;

				if (this.currentSort == "По умолчанию") {
					list = this.listCard;
				} 
				else if (this.currentSort === "Сначала доступные") {
					list.sort((a, b) => a.price > b.price ? 1: -1)
				}
				else if (this.currentSort === "Сначала дорогие") {
					list.sort((a, b) => a.price < b.price ? 1: -1);
				}

				if (this.currentFilter.length) {
					list = list.filter(item => this.currentFilter.includes(item.brand));
				}
				
                return list;
            }
    }
}
</script>

<style lang="scss" scoped>

.main-container {
	display: grid;
	width: 100%;
	padding-top: 32px;
	padding-bottom: 32px;
}

.card-container {
	display: grid;
	justify-content: start;
	grid-template-columns: repeat(4, auto);
}

.action-header {
	display: grid;
	grid-template-columns: repeat(2, auto);
}

.sort-btn {
	justify-self: end;
}

</style>
