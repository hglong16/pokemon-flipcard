<template>
  <HelloScreen
    v-if="statusMatch === 'default'"
    @startGame="onHandleBeforeStart($event)"
  />
  <GameScreen
    v-if="statusMatch === 'match'"
    :cardContext="config.cardContext"
  />
</template>

<script>
import GameScreen from "./components/GameScreen.vue";
import HelloScreen from "./components/HelloScreen.vue";
import createArray from "./utils/createArray";
export default {
  name: "App",
  components: { HelloScreen, GameScreen },
  data() {
    return {
      statusMatch: "default",
      config: {
        size: 16,
        variant: "pokemons",
        cardContext: [],
      },
    };
  },
  methods: {
    onHandleBeforeStart(size) {
      this.config.size = size;
      this.config.cardContext = createArray({ length: size / 2 });
      this.config.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },
  },
};
</script>

<style></style>
