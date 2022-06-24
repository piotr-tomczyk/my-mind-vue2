import { defineStore } from "pinia";
import { BASIC_MEDITATION } from "@/utils";

export const useMeditationStore = defineStore("meditation", {
  state: () => ({
    meditation: JSON.parse(JSON.stringify(BASIC_MEDITATION)),
  }),
  actions: {
    setMeditation(newMeditation) {
      this.meditation = newMeditation;
    },
    resetMeditation() {
      this.meditation = JSON.parse(JSON.stringify(BASIC_MEDITATION));
    },
  },
});
