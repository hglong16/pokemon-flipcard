<template lang="html">
  <div class="screen">
    <div
      class="screen__inner"
      :style="{
        width: `${Math.sqrt(cardContext.length) * 106}px`,
      }"
    >
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
        this.rules[0].value === this.rules[1].value && 
        this.rules[0].index !== this.rules[1].index
      ) {
        console.log("right");
        this.$refs[`card-${this.rules[0].index}`][0].onDisableFlip();
        this.$refs[`card-${this.rules[1].index}`][0].onDisableFlip();
        this.rules = [];
        const disabledEl = document.querySelectorAll(".disabled-flip");
        if (disabledEl && disabledEl.length === this.cardContext.length - 2) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 500);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value || 
        this.rules[0].index === this.rules[1].index
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
<style lang="css" scoped>
.screen {
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--light);
  color: var(--dark);
}

.screen__inner {
  min-width: 424px;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
