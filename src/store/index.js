import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    movies: [],
    watchList: [],
    page: 1,
  },
  mutations: {
    addMovies(state, payload) {
      if (payload.list.length) {
        state.movies = payload.list;
      }
    },
  },
  actions: {
    async getMovies({ commit, state }) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=129e9a0302976d408510823b15b20c45&language=en-US&page=${state.page}`
      );

      if (res.status === 200) {
        commit("addMovies", { list: res.data?.results });
      }
    },
  },
  modules: {},
});
