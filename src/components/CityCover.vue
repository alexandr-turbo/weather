<template>
  <div class="city-card">
    <router-link
      custom
      v-slot="{ navigate }"
      :to="{
        name: 'CityDetails',
        params: { cityName: city.name },
      }"
    >
      <div role="link" @click="navigate" class="description">
        <h1>{{ city.name }}</h1>
        <h3>{{ Math.round(city.main.temp) }} °C</h3>
        <h3>{{ city.weather[0].main }}</h3>
        <img
          :src="`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`"
        />
      </div>
    </router-link>
      <div class="remove-btn" @click="$emit('cityRemoved', city.name)">
        <img
          class="btn-icon"
          src="@/assets/remove.svg"
        />
      </div>
      <div class="update-btn" @click="$emit('cityUpdated', city.name)">
        <img
          class="btn-icon"
          src="@/assets/refresh.svg"
        />
      </div>
  </div>
</template>

<script>
export default {
  name: "CityCover",
  props: ["city"],
};
</script>
<style scoped>
.city-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.remove-btn {
  position: absolute;
  left: 5%;
  top: 5%;
  border-radius: 50%;
  cursor: pointer;
}
.update-btn {
  position: absolute;
  right: 5%;
  top: 5%;
  border-radius: 50%;
  cursor: pointer;
}
.btn-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.description {
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
