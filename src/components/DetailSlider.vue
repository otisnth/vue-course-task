<template>
    <div class="slider">
        <div class="slider-main">
            <img v-for="(item, index) in this.images" v-show="item.show" :key="index" :src="require(`../assets/img/` + item.path)">
        </div>

        <div class="slider-preview">
            <img v-for="(item, index) in this.images" :key="index" :src="require(`../assets/img/` + item.path)" @click="($event) => changeImg($event, item)" :class="{ active: item.show }">
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                selectImg: 0,
                images: []
            }
        },
        props: {
            imgDetails:Array,
        },
        methods:{
            changeImg(event, item){
                if (!item.show){
                    for (const key in this.images) {
                        this.images[key].show = !this.images[key].show;
                    }
                }
            }
        },
        mounted() {
                for (const i in this.imgDetails) {
                let tmpObj = {};
                tmpObj.path = this.imgDetails[i];
                if (i < 2) tmpObj.show = true;
                else tmpObj.show = false;
                this.images.push(tmpObj);
            }
           
        }
    }
</script>

<style lang="scss" scoped>
    .slider {
        height: 672px;
        display: grid;
        gap: 24px;
        align-content: start;
    }

    .slider-main {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(2, minmax(auto, 436px));
        img {
            max-width: 436px;
        }
    }

    .slider-preview {
        display: grid;
        grid-template-columns: repeat(4, minmax(auto, 64px));
        justify-content: start;
        img {
            margin-right: 16px;
            width: 62px;
            box-sizing: content-box;
        }
        .active {
            border: 2px solid #0D1421;
        }

        .active:nth-child(odd) {
            border-right: none;
            margin-right: 0;
            padding-right: 8px;
        }

        .active:nth-child(even) {
            border-left: none;
            padding-left: 8px;
        }
    }

</style>