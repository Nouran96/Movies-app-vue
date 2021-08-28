<template>
  <div :class="['mx-2', 'mb-3', 'd-flex', 'cardContainer']">
    <img
      @click="showCard"
      :src="`https://image.tmdb.org/t/p/w154${movie.poster_path}`"
    />

    <div :class="['cardDetails', { open: isOpen }]">
      <div>
        <p class="title mb-2">
          {{ movie.title }}
        </p>

        <div class="d-flex mb-3">
          <va-rating
            v-if="rating"
            :model-value="rating"
            :max="10"
            size="17px"
            readonly
            color="#f7cd4f"
          />

          <span class="ms-2 content">{{ movie.vote_average }}</span>
        </div>

        <div class="row mb-2">
          <label class="col-4">Release:</label>
          <span class="col-8 content">{{ releaseDate }}</span>
        </div>

        <div class="row mb-2">
          <label class="col-4">Genres:</label>
          <div class="d-flex flex-wrap col-8 content">
            <span v-for="(genre, index) in genres" :key="genre.id">
              <span>{{ genre.name }}</span>
              <span v-if="index !== genres.length - 1">,&nbsp;</span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <va-button
          class="w-auto py-2"
          color="#42b983"
          outline
          text-color="#42b983"
          icon="add"
          >Add to watch list</va-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "MovieCard",
  props: ["movie"],
  computed: {
    isOpen() {
      return this.$store.state.openCardID === this.movie?.id;
    },
    rating() {
      return Math.round(this.movie.vote_average);
    },
    releaseDate() {
      return moment(this.movie.release_date).format("D MMMM YYYY");
    },
    genres() {
      return this.movie.genre_ids.map((id) =>
        this.$store.state.genres.find((genre) => genre.id === id)
      );
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
@import "../scss/variables";

.cardContainer {
  position: relative;
  background: #f9f9f9;
  max-height: 230px;

  border-radius: 20px;

  img {
    border-radius: 0 20px 0 20px;
    cursor: pointer;
  }

  .cardDetails {
    width: 0;
    padding: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out, opacity 0.2s ease-in;

    &.open {
      opacity: 1;
      width: 250px;
      padding: 1rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .title {
      font-weight: bold;
    }

    .content {
      font-size: 0.9rem;
      font-weight: bold;
      color: #757575;
    }

    .va-button--normal .va-button__content {
      padding: 0;
    }

    label {
      font-size: 0.8rem;
      color: $primaryColor;
      font-weight: bold;
    }
  }
}
</style>
