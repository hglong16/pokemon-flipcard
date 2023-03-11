<template lang="html">
  <div>
    <button>
      <p>{{ sizing }}</p>
      <p>{{ mode }}</p>
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
<style lang="css"></style>
