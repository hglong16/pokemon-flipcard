<template lang="html">
  <div class="screen">
    <h1>Pokemon Flipcard Game</h1>
    <h3>Select Mode</h3>
    <div class="mode">
      <SelectMode sizing="4x4" mode="Easy" @click="startGame(16)" />
      <SelectMode sizing="6x6" mode="Medium" @click="startGame(36)" />
      <SelectMode sizing="8x8" mode="Hard" @click="startGame(64)" />
      <SelectMode sizing="10x10" mode="Super Hard" @click="startGame(100)" />
    </div>
  </div>
</template>
<script>
import SelectMode from "./SelectMode.vue";

export default {
  name: "HelloScreen",
  components: { SelectMode },
  emits: ["startGame"],
  methods: {
    startGame(size) {
      this.$emit("startGame", size);
    },
  },
};
</script>
<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--light);
  color: var(--dark);
}

.screen h1 {
  font-size: 4rem;
  text-transform: uppercase;
}

.screen p {
  font-size: 2rem;
}

.mode {
  display: flex;
  flex-direction: row;
  margin: 5px 0px;
}
</style>
