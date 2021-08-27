<template>
  <div class="mx-2 mb-3 d-flex cardContainer">
    <img
      @click="showCard"
      :src="`https://image.tmdb.org/t/p/w154${movie.poster_path}`"
    />

    <div :class="['cardDetails', { open: isOpen }]">
      <p>
        {{ movie.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movie"],
  computed: {
    isOpen() {
      return this.$store.state.openCardID === this.movie?.id;
    },
  },
  methods: {
    showCard() {
      this.$store.commit("setOpenCardID", { id: this.movie.id });
    },
  },
};
</script>

<style scoped lang="scss">
.cardContainer {
  position: relative;
  background: #f9f9f9;
  border-radius: 20px;

  img {
    border-radius: 0 20px 0 20px;
    cursor: pointer;

    // position: absolute;

    // &:hover {
    //   & + .cardDetails {
    //     // position: static;
    //     opacity: 1;
    //     width: 200px;
    //     padding: 1rem;
    //     // z-index: 0;
    //   }
    // }
  }

  .cardDetails {
    // position: absolute;
    width: 0;
    padding: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;

    &.open {
      // position: static;
      opacity: 1;
      width: 200px;
      padding: 1rem;
      // z-index: 0;
    }
  }
}
</style>
