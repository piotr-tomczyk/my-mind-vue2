<template>
  <div id="diary">
    <div id="days" v-for="(day, index) of days" v-bind:key="index">
      <div>{{day.date}}</div>
      <div>{{day.meditations}}</div>
      <button @click="ChangeShowMeditationFormTrigger">AddMeditation</button>
      <form v-on:submit.prevent="AddMeditation(index)" v-if="showMeditationForm">
        <div>
          <div>Type of Meditation: </div>
          <input type="text" v-model="meditation.type" placeholder="Type of Meditation">
        </div>
        <div>
          <div>Duration: </div>
          <input type="number" v-model="meditation.duration" placeholder="Duration">
        </div>
        <div>
          <div>How did your meditation feel? </div>
          <textarea v-model="meditation.textAreas[0]" placeholder="How did your meditation feel?"> </textarea>
        </div>
        <div>
          <div>What kind of thoughts came to mind? </div>
          <textarea v-model="meditation.textAreas[1]" placeholder="How did your meditation feel?"> </textarea>
        </div>
        <div>
          <div>What might you do differently next time you practice this same meditation technique - posture, mudra, length?</div>
          <textarea v-model="meditation.textAreas[2]"
          placeholder="What might you do differently next time you practice this same meditation technique - posture, mudra, length?"> </textarea>
        </div>
        <input
            type="submit"
            value="Add"
        >
      </form>
    </div>
    <button @click="ChangeShowDayFormTrigger">Add Day</button>
    <form v-on:submit.prevent="AddDay" v-if="showDaysForm">
      <div>
        <div>Day: </div>
        <input type="text" v-model="currentDate.day" placeholder="Day">
      </div>
      <div>
        <div>Month: </div>
        <input type="text" v-model="currentDate.month" placeholder="Month">
      </div>
      <div>
        <div>Year: </div>
        <input type="text" v-model="currentDate.year" placeholder="Year">
      </div>
      <input
          type="submit"
          value="Add"
      >
    </form>
  </div>
</template>

<script>
 import {DayContainer} from "@/DayContainer";
export default {
  name: "DiaryView",
  data: function (){
    return {
        days: [],
        showDaysForm: false,
        showMeditationForm: false,
        meditation: {
          type: "",
          duration: 0,
          textAreas: ["","",""],
        },
    }
  },
  computed:{
    currentDate () {
      let date = new Date();
      return {
        day: date.getDate().toString(),
        month: date.getMonth().toString(),
        year: date.getFullYear().toString(),
      };
    }
  },
  methods: {
    ChangeShowDayFormTrigger() {
      this.showDaysForm = !this.showDaysForm;
    },
    ChangeShowMeditationFormTrigger(){
      this.showMeditationForm = !this.showMeditationForm;
    },
    AddDay() {
      let foundDays = this.days.filter((day)=>{
        if(
            day.date.day == this.currentDate.day &&
            day.date.month == this.currentDate.month &&
            day.date.year == this.currentDate.year
        ) {
          return true;
        }
        return false;
        })
      if(foundDays.length === 0){
        this.days.push(new DayContainer(JSON.parse(JSON.stringify(this.currentDate))));
        let localDays = localStorage.getItem("days");
        if (localDays){
          localDays = JSON.parse(localDays);
          localDays.days = this.days;
        }
        else {
          localDays = {days: this.days};
        }
        localStorage.setItem("days", JSON.stringify(localDays))
      }
    },
    AddMeditation(index){
      console.log(this.days)
      console.log(index);
      console.log(this.meditation);
      this.days[index].meditations.push(JSON.parse(JSON.stringify(this.meditation)));
      //TODO: dodac klase z tym, stworzyc osobny component dla day View, forma itd
      let localDays = localStorage.getItem("days");
      if (localDays){
        localDays = JSON.parse(localDays);
        localDays.days = this.days;
      }
      else {
        localDays = {days: this.days};
      }
      localStorage.setItem("days", JSON.stringify(localDays))
      this.meditation.type = "";
      this.meditation.duration = 0;
      this.meditation.textAreas.forEach((el, index)=>{
        this.meditation.textAreas[index] = "";
      });
      this.showMeditationForm = false;
    }
  },
  created: function () {
    let localDays = localStorage.getItem("days");
    console.log(localDays);
    if (localDays)
      this.days = JSON.parse(localDays).days;
  }
}
</script>

<style scoped>
  #diary{
    padding:2em;
    background-color: #42b983;
  }
</style>