import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    movies: [],
    watchList: [],
    page: 1,
    openCardID: null,
  },
  mutations: {
    addMovies(state, payload) {
      if (payload.list.length) {
        state.movies = payload.list;
        this.commit("setOpenCardID", { id: payload.list[0].id });
      }
    },
    setOpenCardID(state, payload) {
      if (payload.id && payload.id !== state.openCardID) {
        state.openCardID = payload.id;
      } else {
        state.openCardID = null;
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
