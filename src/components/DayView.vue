<template>
  <div style="margin-top: 1em;">
    <div><b>Date:</b> {{ day.date.day }}.{{ day.date.month }}.{{ day.date.year }}</div>
    <div>
      <div
          v-for="meditation of day.meditations"
      >
        <MeditationView :meditation="meditation" style="margin-bottom: 1em; margin-top: 1em;"></MeditationView>
      </div>
    </div>
    <button @click="changeShowMeditationFormTrigger">AddMeditation</button>
    <MeditationFormView v-if="showMeditationForm" @submit-meditation="submitMeditation"></MeditationFormView>
  </div>
</template>

<script>
import MeditationFormView from '@/components/MeditationFormView';
import MeditationView from "@/components/MeditationView";

export default {
  name: 'DayView',
  components: {
    MeditationFormView,
    MeditationView,
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
    changeShowMeditationFormTrigger() {
      this.showMeditationForm = !this.showMeditationForm;
    },
    submitMeditation() {
      this.$emit('add-meditation', this.indexOfDay);
      this.showMeditationForm = false;
    },
  },
};
</script>

<style scoped>

</style>
