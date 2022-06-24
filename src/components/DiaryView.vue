<template>
  <div id="diary">
    <div id="days" v-for="(day, index) of days" v-bind:key="index">
      <DayView :day="day" :indexOfDay="index" @add-meditation="addMeditation"></DayView>
    </div>
    <button @click="changeShowDayFormTrigger">Add Day</button>
    <DayFormView v-if="showDaysForm" @add-day="addDay"></DayFormView>
  </div>
</template>

<script>
import DayView from '@/components/DayView';
import DayFormView from '@/components/DayFormView';
import {useMeditationStore} from '@/stores/meditationStore';
import {DayContainer} from "@/utils";

export default {
  name: 'DiaryView',
  components: {
    DayView,
    DayFormView,
  },
  setup() {
    const store = useMeditationStore()

    return {
      store,
    };
  },
  data() {
    return {
      days: [],
      showDaysForm: false,
      showMeditationForm: false,
    };
  },
  methods: {
    changeShowDayFormTrigger() {
      this.showDaysForm = !this.showDaysForm;
    },
    addDay(dayToAdd) {
      const foundDays = this.days.filter((day) => {
        if (
            day.date.day === dayToAdd.day
            && day.date.month === dayToAdd.month
            && day.date.year === dayToAdd.year
        ) {
          return true;
        }
        return false;
      });
      if (foundDays.length === 0) {
        this.days.push(new DayContainer(JSON.parse(JSON.stringify(dayToAdd))));
        this.saveDaysToLocalStorage();
        this.changeShowDayFormTrigger();
      }
    },
    addMeditation(index) {
      this.days[index].meditations.push(JSON.parse(JSON.stringify(this.store.meditation)));
      this.store.resetMeditation();
      console.log(this.store.meditation);
      this.saveDaysToLocalStorage();
    },
    saveDaysToLocalStorage() {
      let localDays = localStorage.getItem('days');
      if (localDays) {
        localDays = JSON.parse(localDays);
        localDays.days = this.days;
      } else {
        localDays = {days: this.days};
      }
      localStorage.setItem('days', JSON.stringify(localDays));
    },
    getDaysFromLocalStorage() {
      const localDays = localStorage.getItem('days');
      if (localDays) {
        this.days = JSON.parse(localDays).days;
      }
    },
  },
  mounted() {
    this.getDaysFromLocalStorage();
  },
};
</script>

<style scoped>
#diary {
  padding: 2em;
  background-color: #42b983;
}
</style>
