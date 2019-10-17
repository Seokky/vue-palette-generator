<template lang="pug" functional>
  section.paletteBlocks
    div.colorBlocksWrapper(v-if="props.palette.length")
      .colorBlock(
        v-for="color in props.palette"
        :style="`background: ${color}`"
      )
        .colorName(v-text="color")
</template>

<script>
export default {
  props: {
    palette: {
      required: true, type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.paletteBlocks {
  display: block;
  height: 60vh;

  .colorBlocksWrapper {
    display: flex;
    flex-wrap: wrap;
    height: 100%;

    .colorBlock {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      min-width: 320px;
      border: 2px solid white;

      .colorName {
        font-family: Monospace;
        font-size: 1.3rem;
        color: white;
        background: rgba(black, 0.3);
        padding: 3px 5px;
        text-shadow: 0 0 2px rgba(0, 0, 0, 1);
      }
    }
  }
}
</style>
