<template lang="html">
  <div>
    <CardComponent
      v-for="(card, index) in cardContext"
      :key="index"
      :ref="`card-${index}`"
      :cardContext="cardContext"
      :imgBackFaceUrl="`pokemons/${card}.png`"
      :card="{ index, value: card }"
      :rules="rules"
      @onFlip="checkRules($event)"
    />
  </div>
</template>
<script>
import CardComponent from "./CardComponent.vue";

export default {
  props: {
    cardContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRules(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("right");
        this.rules = [];
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("wrong");
        let cloneRules = [...this.rules];
        this.rules = [];
        setTimeout(() => {
          this.$refs[`card-${cloneRules[0].index}`][0].onFlipBack();
          this.$refs[`card-${cloneRules[1].index}`][0].onFlipBack();
        }, 800);
      } else {
        return false;
      }
    },
  },

  components: { CardComponent },
};
</script>
<style lang="css"></style>
