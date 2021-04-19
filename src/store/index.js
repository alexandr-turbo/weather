import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
let cities = [];
const key = process.env.VUE_APP_OPENWEATHER;
export default new Vuex.Store({
  state: {
    Cities: [],
    City: {},
    Lat: null,
    Lon: null,
    isCityMissing: true,
    isCityAlreadyAdded: false,
    HourlyWeather: [],
  },
  mutations: {
    setSavedCitiesInfo(state, cities) {
      state.Cities = cities;
    },
    setCurrentCity(state, city) {
      state.City = city;
    },
    setCurrentCityLat(state, lat) {
      state.Lat = lat;
    },
    setCurrentCityLon(state, lon) {
      state.Lon = lon;
    },
    cityIsMissing(state, result) {
      state.isCityMissing = result;
    },
    cityIsAlreadyAdded(state, result) {
      state.isCityAlreadyAdded = result;
    },
    setHourlyWeather(state, hourlyWeather) {
      state.HourlyWeather = hourlyWeather;
    },
  },
  actions: {
    async fetchSavedCitiesInfo({ commit }) {
      if (document.cookie.length && document.cookie !== "-") {
        cities = [];
        let savedCitiesNames = document.cookie.split(",");
        for (let savedCityName of savedCitiesNames) {
          await axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?q=${savedCityName}&units=metric&appid=${key}`
            )
            .then((response) => {
              const city = response.data,
                x = Math.floor(Math.random() * 256),
                y = Math.floor(Math.random() * 256),
                z = Math.floor(Math.random() * 256);
              city.color = "rgb(" + x + "," + y + "," + z + ")";
              cities.push(city);
              commit("setSavedCitiesInfo", cities);
            });
        }
      }
    },
    async addCity({ commit }, name) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${key}`
        )
        .then((response) => {
          if (!document.cookie.includes(response.data.name)) {
            const city = response.data,
              x = Math.floor(Math.random() * 256),
              y = Math.floor(Math.random() * 256),
              z = Math.floor(Math.random() * 256);
            city.color = "rgb(" + x + "," + y + "," + z + ")";
            cities.push(city);
            let names = [];
            cities.forEach((el) => names.push(el.name));
            document.cookie = names.join();
            commit("setSavedCitiesInfo", cities);
          }
        });
    },
    async updateCityWeather({ commit }, name) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${key}`
        )
        .then((response) => {
          let index = cities.findIndex((city) => city.name === name);
          cities[index] = response.data;
          let names = [];
          cities.forEach((el) => names.push(el.name));
          document.cookie = names.join();
          commit("setSavedCitiesInfo", cities);
        });
    },
    removeCity({ commit }, name) {
      cities = cities.filter((city) => city.name !== name);
      let names = [];
      cities.forEach((el) => names.push(el.name));
      document.cookie = names.join();
      if (!names.length) {
        document.cookie = "-";
      }
      commit("setSavedCitiesInfo", cities);
    },
    async getCoordinates({ commit }, cityName) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
        )
        .then((response) => {
          commit("setCurrentCity", response.data);
          commit("setCurrentCityLat", response.data.coord.lat);
          commit("setCurrentCityLon", response.data.coord.lon);
        });
    },
    async getHourlyWeather({ dispatch, commit, getters }, cityName) {
      await dispatch("getCoordinates", cityName);
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${getters.Lat}&lon=${getters.Lon}&exclude=daily,minutely,current,alerts&units=metric&appid=${key}`
        )
        .then((response) => {
          commit("setHourlyWeather", response.data.hourly);
        });
    },
    async checkCityName({ commit }, name) {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${key}`
          )
          .then((response) => {
            if (response.statusText === "OK") {
              commit("cityIsMissing", false);
            }
            if (document.cookie.includes(response.data.name)) {
              commit("cityIsAlreadyAdded", true);
            } else {
              commit("cityIsAlreadyAdded", false);
            }
          });
      } catch (error) {
        console.log("City not found");
        commit("cityIsMissing", true);
      }
    },
  },
  getters: {
    Cities: (state) => state.Cities,
    City: (state) => state.City,
    Lat: (state) => state.Lat,
    Lon: (state) => state.Lon,
    isCityMissing: (state) => state.isCityMissing,
    isCityAlreadyAdded: (state) => state.isCityAlreadyAdded,
    HourlyWeather: (state) => state.HourlyWeather,
  },
  modules: {},
});
