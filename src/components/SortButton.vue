<template>
    <div class="btn" @click="showList" v-click-outside="hideList">
        <p>{{ currentSort }}</p>
        <img src="@/assets/img/arrow.svg" />
    

        <ul v-if="statusShow">
            <li v-for="(item, index) in sortList"
                :key="index"
                @click="() => sort(item)">
                {{ item }}
            </li>
        </ul>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
    export default {
        data(){
            return {
                sortList: ["По умолчанию", "Сначала доступные", "Сначала дорогие"],
                currentSort: "По умолчанию",
                statusShow: false
            }
        },
        methods: {
            showList() {
                this.statusShow = !this.statusShow;
            },
            hideList() {
                if(this.statusShow) this.statusShow = !this.statusShow;
            },
            sort(el) {
                this.currentSort = el;
                this.$emit('sort', el);
            },
        },
        directives: {
            ClickOutside
        }
        
    }
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: auto min-content;
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
    right: 0;
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
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #354153;
        border-radius: 6px;
    }

    li:hover {
        background: #F2F4F7;
    }
  }
}
</style>