<template>
  <div id="app" class="root-flex">
    <HeaderView id="header"></HeaderView>
    <DiaryView id="diary"></DiaryView>
    <FooterView id="footer"></FooterView>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import DiaryView from "@/components/DiaryView";
import FooterView from "@/components/FooterView";
export default {
  name: 'App',
  components: {
    HeaderView,
    DiaryView,
    FooterView,
  },
}
</script>

<style>
  * {
    margin:0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
  .root-flex{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
</style>
<style scoped>
  #header{
    flex-grow: 0.1;
  }
  #diary{
    flex-grow: 1;
  }
  #footer{
    flex-grow: 0.1;
  }
</style>