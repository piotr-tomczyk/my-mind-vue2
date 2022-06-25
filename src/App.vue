<template>
  <div id="app" class="root-flex">
    <HeaderView id="header"></HeaderView>
    <DiaryView id="diary"></DiaryView>
    <FooterView id="footer"></FooterView>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue';
import DiaryView from '@/components/DiaryView.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
    DiaryView,
    FooterView,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

.root-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
</style>
<style scoped lang="scss">
#header {
  flex-grow: 0.1;
}

#diary {
  flex-grow: 1;
}

#footer {
  flex-grow: 0.1;
}
</style>
