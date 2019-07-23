<template lang="pug">
  section.mainAreaWrapper
    settings-panel(
      @generate="getColorBlocks"
    )

    palette-blocks(
      :palette="palette"
    )
</template>

<script>
import SettingsPanel from '@/components/SettingsPanel.vue';
import PaletteBlocks from '@/components/PaletteBlocks.vue';

export default {
  name: 'MainArea',
  components: {
    SettingsPanel,
    PaletteBlocks,
  },
  data() {
    return {
      palette: [],
    };
  },
  methods: {
    getColorBlocks(payload) {
      this.palette = payload.palette;
    },
  },
};
</script>

<style scoped lang="scss">
.mainAreaWrapper {
  width: 100%;
  height: 100%;
}
</style>
