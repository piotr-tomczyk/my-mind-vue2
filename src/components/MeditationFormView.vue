<template>
  <form v-on:submit.prevent="AddMeditation">
    <div>
      <div>Type of Meditation: </div>
      <input type="text" v-model="meditation.type" placeholder="Type of Meditation">
    </div>
    <div>
      <div>Duration: </div>
      <input type="number" v-model="meditation.duration" placeholder="Duration">
    </div>
    <div v-for="(textArea, index) of meditation.textAreas" v-bind:key="index">
      <div>
        <div>{{textArea.title}}</div>
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
import { BASIC_MEDITATION } from '@/utils';

export default {
  name: 'MeditationFormView',
  emits: ['submit-meditation'],
  data() {
    return {
      meditation: JSON.parse(JSON.stringify(BASIC_MEDITATION)),
    };
  },
  methods: {
    AddMeditation() {
      this.$emit('submit-meditation', this.meditation);
      this.meditation = JSON.parse(JSON.stringify(BASIC_MEDITATION));
    },
  },
};
</script>

<style scoped>

</style>
