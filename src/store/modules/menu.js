/* eslint-disable no-param-reassign,no-shadow */
const state = {
  appData: [],
  filteredAppData: [],
  title: '',
  style: '',
  color: '',
  titleSelected: false,
  styleSelected: false,
  colorSelected: false,
};

const mutations = {
  setAppData(state, payload) {
    state.appData = payload;
    state.filteredAppData = payload;
  },
  setTitle(state, payload) {
    state.title = payload;
    state.titleSelected = true;
    state.filteredAppData = state.filteredAppData.filter((beer) => {
      if (state.title) {
        return beer.title === state.title;
      }
      return true;
    });
  },
  resetTitle(state) {
    state.title = '';
    state.titleSelected = false;
    state.filteredAppData = state.appData
      .filter((beer) => {
        if (state.style) {
          return beer.style === state.style;
        }
        return true;
      })
      .filter((beer) => {
        if (state.color) {
          return beer.colors.includes(state.color);
        }
        return true;
      });
  },
  setStyle(state, payload) {
    state.style = payload;
    state.styleSelected = true;
    state.filteredAppData = state.filteredAppData.filter((beer) => beer.style === state.style);
  },
  resetStyle(state) {
    state.style = '';
    state.styleSelected = false;
    state.filteredAppData = state.appData
      .filter((beer) => {
        if (state.title) {
          return beer.title === state.title;
        }
        return true;
      })
      .filter((beer) => {
        if (state.color) {
          return beer.colors.includes(state.color);
        }
        return true;
      });
  },
  setColor(state, payload) {
    state.color = payload;
    state.colorSelected = true;
    state.filteredAppData = state.filteredAppData
      .filter((beer) => beer.colors.includes(state.color));
  },
  resetColor(state) {
    state.color = '';
    state.colorSelected = false;
    state.filteredAppData = state.appData
      .filter((beer) => {
        if (state.title) {
          return beer.title === state.title;
        }
        return true;
      })
      .filter((beer) => {
        if (state.style) {
          return beer.style === state.style;
        }
        return true;
      });
  },
};

const getters = {
  getTitles: (state) => state.filteredAppData.map((beer) => beer.title),
  getColors(state) {
    const colors = state.filteredAppData.reduce((acc, next) => {
      next.colors.map((color) => acc.push(color));
      return acc;
    }, []);
    return colors.filter((v, i) => colors.indexOf(v) === i);
  },
  getStyles(state) {
    return state.filteredAppData.map((beer) => beer.style);
  },
  getImages(state) {
    return state.filteredAppData.map((beer) => beer.images[0].image);
  },
};

const actions = {
  initialize({ commit }, payload) {
    commit('setAppData', payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
