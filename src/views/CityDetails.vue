<template>
  <div v-if="city.main">
    <div class="title">
      {{ $route.params.cityName }}, current temp is
      {{ Math.round(city.main.temp) }}°C
    </div>
    <div class="back-btn">
      <router-link
        custom
        :to="{
          name: 'MainPage',
          params: {},
        }"
      >
        <img class="back-btn-icon" src="@/assets/back.svg" />
      </router-link>
    </div>
    <div class="conditions">
      <div>
        <div>Humidity</div>
        <div>{{ Math.round(city.main.humidity) }} %</div>
        <img class="condition-icon" src="@/assets/humidity.svg" />
      </div>
      <div>
        <div>Pressure</div>
        <div>{{ Math.round(city.main.pressure) }} hPa</div>
        <img class="condition-icon" src="@/assets/pressure.svg" />
      </div>
      <div>
        <div>Wind</div>
        <div>{{ Math.round(city.wind.speed) }} m/s</div>
        <img class="condition-icon" src="@/assets/wind.svg" />
      </div>
      <div>
        <div>Max temp</div>
        <div>{{ Math.round(city.main.temp_max) }} °C</div>
        <img class="condition-icon" src="@/assets/max.svg" />
      </div>
      <div>
        <div>Min temp</div>
        <div>{{ Math.round(city.main.temp_min) }} °C</div>
        <img class="condition-icon" src="@/assets/min.svg" />
      </div>
      <div>
        <div>Sunrise</div>
        <div>{{ msToTime(city.sys.sunrise + city.timezone) }}</div>
        <img class="condition-icon" src="@/assets/sunrise.svg" />
      </div>
      <div>
        <div>Sunset</div>
        <div>{{ msToTime(city.sys.sunset + city.timezone) }}</div>
        <img class="condition-icon" src="@/assets/sunset.svg" />
      </div>
    </div>
    <div
      v-if="
        chartOptions.xaxis.categories &&
        chartOptions.yaxis.max &&
        chartOptions.yaxis.min &&
        series[0].data
      "
      id="chart"
    >
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "CityDetails",
  data() {
    return {
      img: "",
      name: "",
      cities: [],
      lat: null,
      lon: null,
      city: {},
      hourlyWeather: [],
      series: [
        {
          data: [],
          name: "current temperature",
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Hourly Temperature",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [],
          title: {
            text: "Time, H",
          },
        },
        yaxis: {
          title: {
            text: "Temperature, °C",
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  },
  components: {
    apexchart: VueApexCharts,
  },
  async mounted() {
    await this.$store.dispatch("getHourlyWeather", this.$route.params.cityName);
    this.city = this.$store.getters.City;
    this.hourlyWeather = this.$store.getters.HourlyWeather.slice(0, 24);
    this.hourlyWeather.forEach((el) => (el.temp = Math.round(el.temp)));
    this.series[0].data = this.hourlyWeather.map((el) => el.temp);
    this.chartOptions.yaxis.min = Math.min(...this.series[0].data) - 5;
    this.chartOptions.yaxis.max = Math.max(...this.series[0].data) + 5;
    this.chartOptions.xaxis.categories = this.hourlyWeather.map((el) =>
      this.msToHR(el.dt + this.city.timezone)
    );
  },
  methods: {
    msToTime(duration) {
      let seconds = Math.floor(((duration * 1000) / 1000) % 60),
        minutes = Math.floor(((duration * 1000) / (1000 * 60)) % 60),
        hours = Math.floor(((duration * 1000) / (1000 * 60 * 60)) % 24);
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return hours + ":" + minutes + ":" + seconds;
    },
    msToHR(duration) {
      let hours = Math.floor(((duration * 1000) / (1000 * 60 * 60)) % 24);
      hours = hours < 10 ? +("0" + hours) : hours;
      return hours;
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 4rem;
  margin: 1rem 0;
}
.back-btn-icon {
  width: 3.2rem;
  height: 3.2rem;
}
.back-btn {
  position: absolute;
  left: 32px;
  top: 32px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .title {
    font-size: 3rem;
  }
  .back-btn-icon {
    width: 2.4rem;
    height: 2.4rem;
  }
  .back-btn {
    left: 28px;
    top: 28px;
  }
}
@media (min-width: 540px) and (max-width: 767px) {
  .title {
    font-size: 2rem;
  }
  .back-btn-icon {
    width: 1.6rem;
    height: 1.6rem;
  }
  .back-btn {
    left: 24px;
    top: 24px;
  }
}
@media (max-width: 539px) {
  .title {
    font-size: 1.5rem;
  }
  .back-btn-icon {
    width: 1rem;
    height: 1rem;
  }
  .back-btn {
    left: 24px;
    top: 24px;
  }
}
.condition-icon {
  width: 2.5rem;
  height: 2.5rem;
}
.conditions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .conditions {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
@media (max-width: 767px) {
  .conditions {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.conditions-block {
  display: flex;
  justify-content: space-around;
}
</style>
