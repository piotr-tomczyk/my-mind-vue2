<template>
  <form v-on:submit.prevent="SubmitDay">
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
</template>

<script>
export default {
  name: "DayFormView",
  emit: ['add-day'],
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
  methods:{
    SubmitDay(){
      this.$emit('add-day', this.currentDate);
    }
  }
}
</script>

<style scoped>

</style>