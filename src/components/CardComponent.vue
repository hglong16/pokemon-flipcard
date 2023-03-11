<template lang="html">
  <div class="card" :class="{ 'disabled-flip': isDisabled }">
    <div
      class="card__inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card__face card__face--front">
        <div class="card__content"></div>
      </div>
      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url(${require('@/assets/' + imgBackFaceUrl)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: [Array, String, Number, Object],
    },
    cardContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
    imgBackFaceUrl: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.rules.length > 2) return false;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        this.$emit("onFlip", this.card);
      }
    },
    onFlipBack() {
      this.isFlipped = false;
    },
    onDisableFlip() {
      this.isDisabled = true;
    },
  },
};
</script>
<style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  height: 120px;
  width: 90px;
}

.disabled-flip {
  pointer-events: none;
}

.card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card__inner.is-flipped {
  transform: rotateY(-180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 1rem 3px rgba(0, 0, 0, 0.15);
}

.card__face--front .card__content {
  background: url("../assets/pokemons/icon_back.png") no-repeat center center;
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(180deg);
}

.card__face--back .card__content {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
}
</style>
