<template lang="html">
  <div class="mode">
    <button>
      <span>{{ sizing }}</span>
      <span>{{ mode }}</span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    sizing: String,
    mode: String,
  },
};
</script>
<style lang="css" scoped>
.mode button {
  font: var(--font);
  width: 120px;
  height: 120px;
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--dark);
  color: var(--dark);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.mode button:hover {
  background-color: var(--dark);
  color: var(--light);
}

.mode button span:first-child {
  font-size: 2rem;
  font-weight: 700;
}

.mode button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
