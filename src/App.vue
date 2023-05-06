<template>
  <div id="app">
    <BaseHeader :userName="userName"/>
    <main>
      <router-view/>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from './components/BaseFooter.vue';
import BaseHeader from './components/BaseHeader.vue';
export default{
  components: {
    BaseHeader,
    BaseFooter
  },
  data(){
    return{
      userName:"Василий"
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
