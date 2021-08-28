<template>
  <div>
    <div
      v-if="watchList.length"
      class="d-flex flex-wrap justify-content-center m-auto"
    >
      <movie-card
        v-for="movie in watchList"
        :key="movie.id"
        :movie="movie"
        :component="'watchlist'"
      />
    </div>

    <div v-else class="text-center">
      <span>No Movies added yet</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "WatchList",
  components: {
    MovieCard,
  },
  computed: {
    watchList() {
      return this.$store.state.watchList;
    },
  },
  mounted() {
    this.$store.dispatch("getGenres");
  },
};
</script>
