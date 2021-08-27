<template>
  <div>
    <p>
      {{ movie.title }}
    </p>
    <img :src="`https://image.tmdb.org/t/p/w154${movie.poster_path}`" />
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movie"],
};
</script>
