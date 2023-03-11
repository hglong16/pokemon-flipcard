<template>
  <HelloScreen
    v-if="statusMatch === 'default'"
    @startGame="onHandleBeforeStart($event)"
  />
  <GameScreen
    v-if="statusMatch === 'match'"
    :cardContext="config.cardContext"
    @onFinish="showResultScreen"
  />

  <ResultScreen
    v-if="statusMatch === 'result'"
    totalTime="totalTime"
    @onStartAgain="statusMatch = 'default'"
  />
</template>

<script>
import GameScreen from "./components/GameScreen.vue";
import HelloScreen from "./components/HelloScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";

import createArray from "./utils/createArray";
export default {
  name: "App",
  components: { HelloScreen, GameScreen, ResultScreen },
  data() {
    return {
      statusMatch: "default",
      config: {
        size: 16,
        variant: "pokemons",
        cardContext: [],
      },
      totalTime: 0,
    };
  },
  methods: {
    onHandleBeforeStart(size) {
      this.config.size = size;
      this.config.cardContext = createArray({ length: size / 2 });
      this.config.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },
    showResultScreen() {
      this.totalTime = new Date().getTime() - this.config.startedAt;
      this.statusMatch = "result";
    },
  },
};
</script>

<style></style>
