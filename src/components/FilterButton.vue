<template>
  <div class="btn" @click="showList" v-click-outside="hideList">
    <img src="@/assets/img/filter.svg" />
    <p>Фильтры</p>

    <ul v-if="statusShow">
      <li v-for="(item, index) in brandList"
        :key="index">

        <input type="checkbox" name="filter" :id="index" @click="($event) => filter($event, item)" v-if="currentFilter.includes(item)" checked/>
        <input type="checkbox" name="filter" :id="index" @click="($event) => filter($event, item)" v-else/>
        <label :for="index" @click.stop>{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  data() {
    return {
      brandList: ["Акне Студия", "АМИ Париж", "Вквадрате2", "Каменный остров"],
      currentFilter: [],
      statusShow: false,

    };
  },
  methods: {
    showList() {
      this.statusShow = !this.statusShow;
    },
    hideList() {
        if(this.statusShow) this.statusShow = !this.statusShow;
    },
    filter(event, el) {
      event.stopPropagation();
      if (this.currentFilter.includes(el)) {
				let tmpList = this.currentFilter.filter((i) => i !== el);
				this.currentFilter = tmpList;
	  }
	  else {
		  this.currentFilter.push(el);
	  }
      this.$emit('filter', this.currentFilter);
    },
  },
  directives: {
            ClickOutside
  }
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  position: relative;
  display: grid;
  max-width: 133px;
  grid-template-columns: min-content auto;
  gap: 8px;
  padding: 8px 16px;
  align-items: center;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #354153;
  }
  ul {
    position: absolute;
    top: 100%;
    z-index: 100;
    left: 0;
    list-style: none;
    display: grid;
    padding: 6px;
    gap: 4px;
    width: 320px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    
    li {
        padding: 6px 16px;
        position: relative;

        input {
            border-radius: 4px;
            margin-right: 8px;
            width: 16px;
            height: 16px;
        }

        label {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #354153;
        }
    }
  }
}
</style>
