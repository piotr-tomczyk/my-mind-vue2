<template>
  <form v-on:submit.prevent="submitDay">
    <div>
      <div>Day:</div>
      <input type="text" v-model="date.day" placeholder="Day">
    </div>
    <div>
      <div>Month:</div>
      <input type="text" v-model="date.month" placeholder="Month">
    </div>
    <div>
      <div>Year:</div>
      <input type="text" v-model="date.year" placeholder="Year">
    </div>
    <input
        type="submit"
        value="Add"
    >
  </form>
</template>

<script>
export default {
  name: 'DayFormView',
  emit: ['add-day'],
  data: function () {
    return {
      date: null,
    }
  },
  methods: {
    submitDay() {
      this.$emit('add-day', this.date);
    },
  },
  beforeMount() {
    const date = new Date();
    this.date = {
      day: date.getDate().toString(),
      month: date.getMonth().toString(),
      year: date.getFullYear().toString(),
    };
  }
};
</script>

<style scoped lang="scss">

</style>
