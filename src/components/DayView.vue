<template>
  <div>
    <div>{{day.date}}</div>
    <div>{{day.meditations}}</div>
    <button @click="ChangeShowMeditationFormTrigger">AddMeditation</button>
    <MeditationFormView v-if="showMeditationForm" @submit-meditation="SubmitMeditation"></MeditationFormView>
  </div>
</template>

<script>
import MeditationFormView from "@/components/MeditationFormView";
export default {
  name: "DayView",
  components:{
    MeditationFormView,
  },
  emits: ['add-meditation'],
  props:{
    day: Object,
    indexOfDay: Number,
  },
  data:function (){
    return{
      showMeditationForm: false,
    }
  },
  methods:{
    ChangeShowMeditationFormTrigger(){
      this.showMeditationForm = !this.showMeditationForm;
    },
    SubmitMeditation(meditation){
        console.log("DAY VIEW", meditation);
        this.$emit('add-meditation', meditation, this.indexOfDay);
    }
  }
}
</script>

<style scoped>

</style>