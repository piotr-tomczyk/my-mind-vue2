<template>
  <div id="diary">
    <div id="days" v-for="(day, index) of days" v-bind:key="index">
      <DayView :day="day" :indexOfDay="index" @add-meditation="AddMeditation"></DayView>
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
 import DayView from "@/components/DayView";

export default {
  name: "DiaryView",
  components:{
    DayView,
  },
  data: function (){
    return {
        days: [],
        showDaysForm: false,
        showMeditationForm: false,
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
    AddDay() {
      let foundDays = this.days.filter((day)=>{
        return day.date.day === this.currentDate.day &&
            day.date.month === this.currentDate.month &&
            day.date.year === this.currentDate.year;

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
    AddMeditation(meditation, index){
      console.log("DIARY VIEW", meditation, index);
      this.days[index].meditations.push(meditation);
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