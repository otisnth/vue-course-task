<template>
  <ul>
    <li
      v-for="(item, index) in this.sizes"
      :key="index"
      :class="{ active: item }"
      @click="() => selectSize(index, item)"
    >
      <span>{{ index }}</span>
      <img src="@/assets/img/icon-ok.svg" v-if="index == selectedSize" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    sizes: Object,
    selectedSize: String,
  },
  methods: {
    selectSize(item, status) {
      if (this.selectedSize == item) this.selectedSize = "Выберите размер";
      else if(status) this.selectedSize = item;
      this.$emit("selectSize", this.selectedSize);
    },
  },
};
</script>

<style lang="scss" scoped>
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
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  li {
    padding: 6px 16px;
    display: grid;
    grid-template-columns: auto min-content;
    align-items: center;
    gap: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #eaecf0;
    border-radius: 6px;

    img {
      width: 16px;
      height: 16px;
      background: #0d1421;
      border-radius: 50%;
      padding: 4px;
    }
  }

  li.active {
    color: #354153;
  }

  li:hover {
    background: #f2f4f7;
  }
}
</style>
