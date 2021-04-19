<template>
  <div>
    <form class="form" @submit.prevent="clicked">
      <input type="text" placeholder="Add some cities" v-model.trim="name" />
      <button type="submit">Add</button>
      <div class="error" v-if="isCityMissing && name">City not found</div>
      <div class="error" v-else-if="isCityAlreadyAdded && name">
        City is already in list
      </div>
    </form>
    <div class="cities-cards-grid" v-if="cities.length">
      <div v-for="city in cities" :key="city.id" class="city-card">
        <CityCover
          :city="city"
          @cityRemoved="removeCity($event)"
          @cityUpdated="updateCity($event)"
          :style="{ 'background-color': city.color }"
        />
      </div>
    </div>
    <h1 class="start-text" v-else-if="!cities.length">
      There are no selected cities. Type city name in the input field above
    </h1>
  </div>
</template>

<script>
import CityCover from "../components/CityCover.vue";
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
      isCityAlreadyAdded: false,
    };
  },
  watch: {
    async name() {
      await this.$store.dispatch("checkCityName", this.name);
      this.isCityMissing = this.$store.getters.isCityMissing;
      this.isCityAlreadyAdded = this.$store.getters.isCityAlreadyAdded;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchSavedCitiesInfo");
    this.cities = this.$store.getters.Cities;
  },
  methods: {
    async clicked() {
      if (this.name && !this.isCityAlreadyAdded && !this.isCityMissing) {
        await this.$store.dispatch("addCity", this.name);
        this.cities = this.$store.getters.Cities;
        this.name = "";
      }
    },
    removeCity(name) {
      this.$store.dispatch("removeCity", name);
      this.cities = this.$store.getters.Cities;
    },
    async updateCity(name) {
      await this.$store.dispatch("updateCityWeather", name);
      this.cities = this.$store.getters.Cities;
    },
  },
};
</script>
<style scoped>
.form {
  position: relative;
}
.error {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.cities-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cities-cards-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 767px) {
  .cities-cards-grid {
    grid-template-columns: 1fr;
  }
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
