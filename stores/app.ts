import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    visitedSections: [],
  }),

  getters: {},

  actions: {
    addVisitedSection(payload) {
      if (!this.visitedSections.includes(payload)) {
        this.visitedSections = [...this.visitedSections, payload];
      }
    },
  },
});
