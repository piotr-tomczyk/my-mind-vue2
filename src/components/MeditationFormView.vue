<template>
  <form v-on:submit.prevent="addMeditation">
    <div>
      <div>Type of Meditation:</div>
      <input type="text" v-model="meditation.type" placeholder="Type of Meditation">
    </div>
    <div>
      <div>Duration:</div>
      <input type="number" v-model="meditation.duration" placeholder="Duration">
    </div>
    <div v-for="(textArea, index) of meditation.textAreas" v-bind:key="index">
      <div>
        <div>{{ textArea.title }}</div>
        <textarea v-model="textArea.content" :placeholder="textArea.title"></textarea>
      </div>
    </div>
    <input
        type="submit"
        value="Add"
    >
  </form>
</template>

<script>
import {useMeditationStore} from "@/stores/meditationStore";

export default {
  name: 'MeditationFormView',
  emits: ['submit-meditation'],
  setup() {
    const store = useMeditationStore();

    return {
      store
    };
  },
  data() {
    return {
      meditation: null,
    };
  },
  methods: {
    addMeditation() {
      this.$emit('submit-meditation');
    },
  },
  beforeMount() {
    console.log(this.store);
    this.meditation = this.store.meditation;
  }
};
</script>

<style scoped>

</style>
