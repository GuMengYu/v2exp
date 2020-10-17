<template>
  <v-card 
    class="mx-auto"
    outlined
    rounded
  >
    <header>
      <h2>{{ cardTitle }}</h2>
      <v-icon
        :class="{ 'mdi-crosshairs-gps-active': positionActive }"
        @click="initWeather"
      >
        mdi-crosshairs-gps
      </v-icon>
    </header>
    <v-divider></v-divider>
    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">{{ $$(weather, 'now', 'temp') }}&deg;C </v-col>
        <v-col cols="6"> </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ $$(weather, 'now', 'windSpeed') }} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-divider/>

    <v-card-actions class="d-flex justify-space-between">
        <v-btn-toggle v-model="temperature_type" color="#1a73e8" group dense>
            <v-btn x-small text value="0">C</v-btn>
            <v-divider vertical />
            <v-btn x-small text value="1">F</v-btn>
            <v-divider vertical />
            <v-btn x-small text value="2">K</v-btn>
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
      temperature_type: '0',
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
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  .mdi-crosshairs-gps {
    font-size: 14px;
  }
  .mdi-crosshairs-gps-active {
    color: #1a73e8;
  }
}</style
>>
