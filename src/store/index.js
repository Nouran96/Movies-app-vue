import { createStore } from "vuex";
import axios from "axios";

const initialState = {
  movies: [],
  watchList: JSON.parse(localStorage.getItem("watchList")) || [],
  genres: [],
  page: 1,
  openCardID: null,
};

export default createStore({
  state: initialState,
  mutations: {
    addMovies(state, payload) {
      if (payload.list.length) {
        state.movies = payload.list;
        // this.commit("setOpenCardID", { id: payload.list[0].id });
      }
    },
    addGenres(state, payload) {
      if (payload.list.length) {
        state.genres = payload.list;
      }
    },
    setOpenCardID(state, payload) {
      if (payload.id && payload.id !== state.openCardID) {
        state.openCardID = payload.id;
      } else {
        state.openCardID = null;
      }
    },
    addToWatchList(state, payload) {
      if (payload.movie) {
        const newList = [...state.watchList, payload.movie];
        state.watchList = newList;
        localStorage.setItem("watchList", JSON.stringify(newList));
      }
    },
    removeFromWatchList(state, payload) {
      if (payload.movie) {
        const newList = state.watchList.filter(
          (movie) => movie.id !== payload.movie.id
        );
        state.watchList = newList;
        localStorage.setItem("watchList", JSON.stringify(newList));
      }
    },
  },
  actions: {
    async getMovies({ commit, dispatch, state }) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=129e9a0302976d408510823b15b20c45&language=en-US&page=${state.page}`
      );

      if (res.status === 200) {
        commit("addMovies", { list: res.data?.results });
        dispatch("getGenres");
      }
    },
    async getGenres({ commit }) {
      const genresRes = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=129e9a0302976d408510823b15b20c45&language=en-US`
      );

      if (genresRes.status === 200) {
        commit("addGenres", { list: genresRes.data?.genres });
      }
    },
  },
  modules: {},
});
