<template>
  <v-card
    class="mx-auto"
    outlined
    rounded
  >
    <header>
      <h2 class="subtitle-1 font-weight-bold">{{ cardTitle }}</h2>
      <v-icon
        :class="{ 'mdi-crosshairs-gps-active': positionActive }"
        @click="initWeather"
      >
        mdi-crosshairs-gps
      </v-icon>
    </header>
    <v-divider class="mx-4" />
    <div class="my-4 px-4">
      <div class="d-flex justify-space-between align-center">
        <div class="pa-0">
          <div class="text-subtitle-1">
            {{ $$(weather, 'now', 'text') }}
          </div>
          <h2 class="text-h4">
            {{ $$(weather, 'now', 'temp') }}
          </h2>
        </div>
        <div class="pa-0">
          <v-icon class="weather_icon">
            <!-- {{ `mdi-${$$(weather, 'now', 'icon')}` }} -->
            mdi-cloud
          </v-icon>
        </div>
      </div>
      <div></div>
    </div>
    <v-divider class="mx-4" />
    <v-card-actions class="d-flex justify-space-between">
      <v-btn-toggle
        v-model="temperature_type"
        color="#1a73e8"
        group
        dense
      >
        <template
          v-for="(o, index) in temps"
        >
          <v-btn
            :key="index"
            x-small
            icon
            :value="o"
            @click="changeTempType(o)"
          >
            <v-icon>{{ `mdi-${o}` }}</v-icon>
          </v-btn>
          <v-divider
            :key="`${index}_divider`"
            vertical
          />
        </template>
      </v-btn-toggle>
      <v-btn
        text
        :href="weather.fxLink"
        target="_blank"
        color="primary"
      >
        和风天气
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      temps: ['temperature-celsius', 'temperature-fahrenheit', 'temperature-kelvin'],
      temperature_type: 'temperature-celsius',
      city: {
        name: '香港',
        lat: '22.30699921',
        lon: '114.17700195',
        adm2: '香港',
        adm1: '香港特别行政区',
        country: '中国',
        tz: 'Asia/Shanghai',
        utcOffset: '+08:00',
        type: 'city',
        fxLink: 'http://hfx.link/2cz1',
      },
      weather: {
        'updateTime': '2020-10-17T15:51+08:00',
        'fxLink': 'http://hfx.link/2cz1',
        'now':{
            'obsTime': '2020-10-17T15:20+08:00',
            'temp': '27',
            'feelsLike': '28',
            'icon': '104',
            'text': '阴',
            'wind360': '48',
            'windDir': '东北风',
            'windScale': '2',
            'windSpeed': '9',
            'humidity': '60',
            'precip': '0.0',
            'pressure': '1006',
            'vis': '11',
            'cloud': '91',
            'dew': '20',
        },
      },
    };
  },
  computed: {
    positionActive: vm => !vm.loading,
    cardTitle() {
      return this.loading ? '正在获取当地天气信息...' : '您当地的天气';
    },
  },
  created() {
    this.initWeather();
  },
  methods: {
    changeTempType(type) {

    },
    async initWeather() {
        this.loading = true;
        const location = await this.getCurrentPosition();
        const weather = await this.getCityWeather(location);
        console.log(weather);
        // this.weather = weather;
        this.loading = false;
    },
    async getCityWeather(location) {
      const cityInfo = await axios
        .get(
          `https://geoapi.heweather.net/v2/city/lookup?key=95d5078dd7f0478fb42a0365644a4251&location=${location.longitude},${location.latitude}`
        )
        .then(({data}) => {
          return data.location[0];
        });
        const weather = await axios.get(`https://devapi.heweather.net/v7/weather/now?key=95d5078dd7f0478fb42a0365644a4251&location=${cityInfo.id}`).then(({data}) => {
            return Object.assign(cityInfo, {weather: data});
        });
        return weather;
    },
    getCurrentPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            resolve(coords);
          },
          error => {
            reject(error);
          },
        );
      });
    },
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  margin: 0 16px;
  .mdi-crosshairs-gps {
    font-size: 14px;
  }
  .mdi-crosshairs-gps-active {
    color: #1a73e8;
  }
}
.weather_icon {
  font-size: 84px;
}
</style>
