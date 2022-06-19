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
import {MeditationContainer, TextAreaContainer} from "@/DayContainer";
export default {
  name: "MeditationFormView",
  emits: ['submit-meditation'],
  data: function (){
    return {
      meditation: new MeditationContainer("",
          0,
          [
              new TextAreaContainer("How did your meditation feel?", ""),
              new TextAreaContainer("What kind of thoughts came to mind?", ""),
              new TextAreaContainer("What might you do differently next time you practice " +
                  "this same meditation technique - posture, mudra, length?", ""),
          ])
    }
  },
  methods:{
    AddMeditation(){
      console.log("MEDITATION FORM", this.meditation);
      this.$emit('submit-meditation', this.meditation);
      this.meditation = new MeditationContainer("",
          0,
          [
            new TextAreaContainer("How did your meditation feel?", ""),
            new TextAreaContainer("What kind of thoughts came to mind?", ""),
            new TextAreaContainer("What might you do differently next time you practice " +
                "this same meditation technique - posture, mudra, length?", ""),
          ]);
    },
  }
}
</script>

<style scoped>

</style>