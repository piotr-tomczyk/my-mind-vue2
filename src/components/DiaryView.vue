<template>
  <div id="diary">
    <div id="days" v-for="(day, index) of days" v-bind:key="index">
      <DayView :day="day" :indexOfDay="index" @add-meditation="AddMeditation"></DayView>
    </div>
    <button @click="ChangeShowDayFormTrigger">Add Day</button>
    <DayFormView v-if="showDaysForm" @add-day="AddDay"></DayFormView>
  </div>
</template>

<script>
import {DayContainer} from "@/utils";
 import DayView from "@/components/DayView";
 import DayFormView from "@/components/DayFormView";
export default {
  name: "DiaryView",
  components:{
    DayView,
    DayFormView,
  },
  data: function (){
    return {
        days: [],
        showDaysForm: false,
        showMeditationForm: false,
    }
  },
  methods: {
    ChangeShowDayFormTrigger() {
      this.showDaysForm = !this.showDaysForm;
    },
    AddDay(dayToAdd) {
      let foundDays = this.days.filter((day)=>{
        if(
            day.date.day === dayToAdd.day &&
            day.date.month === dayToAdd.month &&
            day.date.year === dayToAdd.year
        ) {
          return true;
        }
        return false;
        })
      if(foundDays.length === 0){
        this.days.push(new DayContainer(JSON.parse(JSON.stringify(dayToAdd))));
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
      this.days[index].meditations.push(meditation);
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