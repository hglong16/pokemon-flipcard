<template lang="html">
  <div>
    <h1>Pokemon Flipcard Game</h1>
    <h3>Select Mode</h3>
    <SelectMode sizing="4x4" mode="Easy" @click="startGame(16)" />
    <SelectMode sizing="6x6" mode="Medium" @click="startGame(36)" />
    <SelectMode sizing="8x8" mode="Hard" @click="startGame(64)" />
    <SelectMode sizing="10x10" mode="Super Hard" @click="startGame(100)" />
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
<style lang="css"></style>
