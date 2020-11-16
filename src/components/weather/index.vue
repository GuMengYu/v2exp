<template>
  <v-card
    class="mx-auto"
    outlined
    rounded
  >
    <header>
      <h2 class="subtitle-1 font-weight-bold">
        {{ cardTitle }}
      </h2>
      <v-icon
        :class="{ 'mdi-crosshairs-gps-active': positionActive }"
        size="14"
        @click="initWeather"
      >
        {{ mdiCrosshairsGps }}
      </v-icon>
    </header>
    <v-divider class="mx-4" />
    <div>
      <div class="d-flex justify-space-between align-center pa-4">
        <div class="pa-0">
          <div class="text-subtitle-1">
            {{ $$(weather, 'now', 'text') }}
          </div>
          <h2 class="text-h4">
            {{ $$(weather, 'now', 'temp') }}&deg;C
          </h2>
        </div>
        <div class="pa-0">
          <v-icon size="65">
            {{ $$(iconMap.get($$(weather, 'now', 'icon')), 'icon') }}
          </v-icon>
        </div>
      </div>
      <div class="forecast pa-4 d-flex justify-space-between">
        <div
          v-for="(o, idx) in weather.forecast"
          :key="idx"
          class="d-flex flex-column forecast-item align-center"
        >
          <span class="weekday">
            {{ $dayjs(o.fxDate).format('dddd') }}
          </span>
          <v-icon
            class="mt-2 mb-2"
            size="30"
          >
            {{ $$(iconMap.get(o.iconDay), 'icon') }}
          </v-icon>
          <div class="d-flex flex-column">
            <span class="M9zPtb">
              <span class="temp-high">{{ o.tempMax }}
                <span class="RsGMK J0RxDf">&deg;C</span>
              </span>
            </span>
            <span class="e6XX3e">
              <span class="temp-low">{{ o.tempMin }}
                <span class="RsGMK J0RxDf">&deg;C</span>
              </span>
            </span>
          </div>
        </div>
      </div>
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
            @click="changeTempType(index)"
          >
            <v-icon>{{ o }}</v-icon>
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
        {{ $t('message.he') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import service from './service';
import iconMap from './weatherIcon';
import {mdiCrosshairsGps, mdiTemperatureCelsius, mdiTemperatureKelvin, mdiTemperatureFahrenheit} from '@mdi/js';

export default {
  data() {
    return {
      loading: true,
      temps: [mdiTemperatureCelsius, mdiTemperatureFahrenheit, mdiTemperatureKelvin],
      temperature_type: 'temperature-celsius',
      weather: {
        name: '第三红岸基地',
        lat: '22.30699921',
        lon: '114.17700195',
        adm2: '第三红岸基地',
        adm1: '',
        country: '地球某处',
        type: 'city',
        updateTime: '2020-10-17T15:51+08:00',
        fxLink: 'http://hfx.link/2cz1',
        now:{
          temp: 0,
          text: '晴',
          icon: '100',
        },
        forecast: [{'fxDate':'2020-10-18','sunrise':'06:29','sunset':'17:28','moonrise':'07:51','moonset':'18:41','moonPhase':'峨眉月','tempMax':'21','tempMin':'-5','iconDay':'104','textDay':'晴','iconNight':'150','textNight':'晴','wind360Day':'45','windDirDay':'东北风','windScaleDay':'1-2','windSpeedDay':'3','wind360Night':'0','windDirNight':'北风','windScaleNight':'1-2','windSpeedNight':'3','humidity':'43','precip':'0.0','pressure':'1018','vis':'25','cloud':'0','uvIndex':'4'},{'fxDate':'2020-10-19','sunrise':'06:30','sunset':'17:26','moonrise':'09:08','moonset':'19:20','moonPhase':'峨眉月','tempMax':'20','tempMin':'7','iconDay':'100','textDay':'晴','iconNight':'101','textNight':'多云','wind360Day':'225','windDirDay':'西南风','windScaleDay':'1-2','windSpeedDay':'3','wind360Night':'225','windDirNight':'西南风','windScaleNight':'1-2','windSpeedNight':'3','humidity':'33','precip':'0.0','pressure':'1017','vis':'25','cloud':'0','uvIndex':'4'},{'fxDate':'2020-10-20','sunrise':'06:31','sunset':'17:25','moonrise':'10:24','moonset':'20:05','moonPhase':'峨眉月','tempMax':'18','tempMin':'8','iconDay':'101','textDay':'多云','iconNight':'101','textNight':'多云','wind360Day':'180','windDirDay':'南风','windScaleDay':'1-2','windSpeedDay':'3','wind360Night':'315','windDirNight':'西北风','windScaleNight':'3-4','windSpeedNight':'16','humidity':'29','precip':'0.0','pressure':'1012','vis':'25','cloud':'5','uvIndex':'2'}],
      },
      iconMap,
      mdiCrosshairsGps,
    };
  },
  computed: {
    positionActive: vm => !vm.loading,
    cardTitle() {
      return this.loading ? '正在获取当地天气信息...' : [this.weather.adm1, this.weather.adm2, this.weather.country].filter(i=>i).join('·');
    },
  },
  created() {
    this.initWeather();
  },
  methods: {
    changeTempType() {},
    async initWeather() {
      this.loading = true;
      try {
        const location = await this.getCurrentPosition();
        this.weather = await this.getCityWeather(location);
      } catch(e) {
        this.loading = false;
      }
    },
    async getCityWeather(location) {
      const cityInfo = await service.city(location.longitude, location.latitude);
      const forecast = service.forecast({day: 3, locationId: cityInfo.id});
      const now = service.now(cityInfo.id);
      return await Promise.all([forecast, now]).then(([{daily}, {now}]) => {
        return Object.assign(cityInfo, {now, forecast: daily});
      });
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

<style lang="scss" scoped>
header {

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  margin: 0 16px;
  .mdi-crosshairs-gps-active {
    color: #1a73e8;
  }
}
.forecast {
  .forecast-item {
    span {
      text-align: center;
    }
    .weekday {
      display: block;
      font-size: 0.875rem;
      color: #3c4043;
      font-weight: 500;
      height: 1rem;
    }
    .temp-high {
      font-weight: 700;
      font-size: 0.75rem;
      color: #3c4043;
    }
    .temp-low {
      font-size: 0.75rem;
      color: #3c4043;
    }
  }
}
</style>
