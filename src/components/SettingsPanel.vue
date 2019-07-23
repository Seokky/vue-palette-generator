<template lang="pug">
  section.settingsPanel

    .settingsPanelInputs
      .inputGroup
        span.label Number of colors
        select.input(v-model="settings.numOfColors")
          option(value="2") 2
          option(value="3") 3
          option(value="4") 4
          option(value="5") 5

    .settingsPanelFooter
      button.generateBtn(
        @click="emitPalette"
      ) Generate!

</template>

<script>
export default {
  data() {
    return {
      settings: {
        numOfColors: 3,
      },
    };
  },
  methods: {
    emitPalette() {
      this.$emit('generate', {
        palette: this.getRandomPalette(),
      });
    },
    getRandomPalette() {
      const colors = Array.from('0'.repeat(this.settings.numOfColors));

      return colors.map(() => this.getRandomColor());
    },
    getRandomColor() {
      let parts = [1, 2, 3];
      parts = parts.map(() => this.getRandomNumber(0, 255));

      const [r, g, b] = [...parts];

      return `rgb(${r}, ${g}, ${b})`;
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * ((max + 1) - min)) + min;
    },
  },
};
</script>

<style lang="scss" scoped>
.settingsPanel {
  display: flex;
  flex-direction: column;
  background: rgba(coral,.1);
  height: 40vh;
  padding: 40px 20px;
  box-shadow: 0px 2px 6px rgba(0,0,0,.2);
  .settingsPanelInputs {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    .inputGroup {
      flex-basis: 200px;
      display: flex;
      flex-direction: column;
      .label {
        font-size: 1rem;
        text-align: left;
      }
      .input {
        font-size: 1.1rem;
        padding: 5px 10px;
        margin-top: 6px;
      }
    }
  }
  .settingsPanelFooter {
    .generateBtn {
      cursor: pointer;
      border: none;
      padding: 10px 20px;
      font-size: 1.5rem;
      color: white;
      background: turquoise;
      transition: all .15s ease-in;
      &:active, &:focus, &:hover {
        outline: none;
        box-shadow: 0px -2px 4px rgba(0,0,0,.2);
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>
