<template>
  <div>
    <div>{{ day.date }}</div>
    <div>{{ day.meditations }}</div>
    <button @click="ChangeShowMeditationFormTrigger">AddMeditation</button>
    <MeditationFormView v-if="showMeditationForm" @submit-meditation="SubmitMeditation"></MeditationFormView>
  </div>
</template>

<script>
import MeditationFormView from '@/components/MeditationFormView';

export default {
  name: 'DayView',
  components: {
    MeditationFormView,
  },
  emits: ['add-meditation'],
  props: {
    day: Object,
    indexOfDay: Number,
  },
  data() {
    return {
      showMeditationForm: false,
    };
  },
  methods: {
    ChangeShowMeditationFormTrigger() {
      this.showMeditationForm = !this.showMeditationForm;
    },
    SubmitMeditation() {
      this.$emit('add-meditation', this.indexOfDay);
      this.showMeditationForm = false;
    },
  },
};
</script>

<style scoped>

</style>
