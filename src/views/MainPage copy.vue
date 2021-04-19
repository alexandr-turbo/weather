<template>
  <div>
    <form @submit.prevent="clicked">
      <input type="text" placeholder="Add some cities" v-model.trim="name" />
      <button type="submit">Add</button>
      <div v-if="isCityMissing && name">City not found</div>
      <div v-else-if="isCityAlreadyAdded && name">City is already in list</div>
    </form>
    <div class="cities-cards-grid" v-if="cities.length">
      <div
        v-for="city in cities"
        :key="city.id"
        class="city-card"
      >
        <CityCover
          :city="city"
          @cityRemoved="removeCity($event)"
          @cityUpdated="updateCity($event)"
          :style="{'background-color': city.color}"
        />
      </div>
    </div>
    <div v-else>
      There are no selected cities. Type city name in the input field above
    </div>
  </div>
</template>

<script>
import CityCover from "../components/CityCover.vue";
import axios from "axios";
export default {
  name: "MainPage",
  components: {
    CityCover,
  },
  data() {
    return {
      img: "",
      name: "",
      cities: [],
      isCityMissing: true,
      isCityAlreadyAdded: false
    };
  },
  watch: {
    async name() {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.name}&units=metric&appid=edc896dcc917ea71a2156d703a604d3f`
          )
          .then((response) => {
            if (response.statusText === "OK") {
              this.isCityMissing = false;
            } 
            if (document.cookie.includes(response.data.name)) {
              this.isCityAlreadyAdded = true
            } else {
              this.isCityAlreadyAdded = false
            }
          });
      } catch (error) {
        console.log("City not found");
        this.isCityMissing = true;
      }
    },
  },
  async mounted() {
    // console.log(document.cookie);
    await this.$store.dispatch("fetchSavedCitiesInfo");
    this.cities = this.$store.getters.Cities;
    // if (document.cookie.length) {
    //   let names2 = document.cookie.split(",");
    //   for (let name2 of names2) {
    //     await axios
    //       .get(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${name2}&units=metric&appid=edc896dcc917ea71a2156d703a604d3f`
    //       )
    //       .then((response) => {
    //         let a = response.data
    //         // console.log(a)
    //         this.$set(a, "color", this.randomColor());
    //         this.cities.push(a);
    //       });
    //   }
    // }
  },
  methods: {
    randomColor() {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      const bgColor = "rgb(" + x + "," + y + "," + z + ")";

      return bgColor;
    },
    async clicked() {
      if (this.name) {
        // await this.$store.dispatch("fetchSavedCitiesInfo", this.name);
        // this.cities = this.$store.getters.Cities;
        // this.name = ""
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.name}&units=metric&appid=edc896dcc917ea71a2156d703a604d3f`
          )
          .then((response) => {
            if (!document.cookie.includes(response.data.name)) {
              let a = response.data
              // console.log(a)
              this.$set(a, "color", this.randomColor());
              this.cities.push(a);
              this.name = "";
              let names = [];
              this.cities.forEach((el) => names.push(el.name));
              document.cookie = names.join();
              // console.log(this.cities)
            }
          });
      }
    },
    removeCity(name) {
      this.$store.dispatch("removeCity", name);
      this.cities = this.$store.getters.Cities;
      // this.cities = this.cities.filter((name1) => name1.name !== name);
      // let names = [];
      // this.cities.forEach((el) => names.push(el.name));
      // document.cookie = names.join();
      // if (!names) {
      //   document.cookie = undefined;
      // }
    },
    async updateCity(name) {
      await this.$store.dispatch("updateCityWeather", name);
      this.cities = this.$store.getters.Cities;
      // await axios
      //   .get(
      //     `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=edc896dcc917ea71a2156d703a604d3f`
      //   )
      //   .then((response) => {
      //     let index = this.cities.findIndex((city) => city.name === name);
      //     this.cities[index] = response.data;
      //     let names = [];
      //     this.cities.forEach((el) => names.push(el.name));
      //     document.cookie = names.join();
      //   });
    },
  },
};
</script>
<style scoped>
.cities-cards-grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}
.city-card {
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 20px;
  border-radius: 10px;
  flex-grow: 1;
}
</style>
