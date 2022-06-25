<template>
  <div>
    <div><b>Type:</b> {{ meditation.type }}</div>
    <div><b>Duration:</b> {{ meditation.duration }} minutes</div>
    <div
        v-for="textArea of meditation.textAreas">
      <div style="font-weight: bold">{{ textArea.title }}</div>
      <p>{{ textArea.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeditationView",
  props: {
    meditation: Object,
  }
}
</script>

<style scoped lang="scss">

</style>
