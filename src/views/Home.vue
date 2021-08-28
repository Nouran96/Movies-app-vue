<template>
  <div class="home">
    <div
      v-if="movies.length"
      class="d-flex flex-wrap justify-content-center cardsContainer"
    >
      <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>

    <div v-else class="text-center">
      <span>No Movies Found</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "Home",
  components: {
    MovieCard,
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
};
</script>

<style scoped lang="scss">
.cardsContainer {
  // max-width: 710px;
  margin: auto;
}
</style>
