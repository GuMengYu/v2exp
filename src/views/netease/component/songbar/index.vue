<template>
  <v-hover v-slot="{ hover }">
    <v-list-item :value="song.id">
      <v-card class="mr-4">
        <v-overlay :value="hover" absolute>
          <v-btn icon>
            <v-icon>{{ mdiPlay }}</v-icon>
          </v-btn>
        </v-overlay>
        <v-img
          :src="$$(song, 'al', 'picUrl')"
          max-height="40"
          max-width="40"
          lazy-src="@assets/girl.jpg"
        />
      </v-card>
      <v-list-item-content>
        <v-list-item-title v-text="song.name" />
        <v-list-item-subtitle class="text--primary" v-text="$$(song, 'ar', '0', 'name')" />
      </v-list-item-content>
      <v-list-item-action class="d-flex flex-row align-center song-btns">
        <v-btn
          icon
          color="red"
          width="30"
          height="30"
          x-small
          class="list-delete-button"
        >
          <v-icon>
            {{ mdiHeartOutline }}
          </v-icon>
        </v-btn>
        <v-btn
          v-show="hover"
          width="30"
          height="30"
          icon
          color="red"
          x-small
          class="list-delete-button"
        >
          <v-icon>
            {{ mdiDotsHorizontal }}
          </v-icon>
        </v-btn>
        <v-list-item-action-text v-show="!hover">
          {{ song.dt | formatDuring }}
        </v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </v-hover>
</template>
<script>
import {mdiHeart, mdiDotsHorizontal, mdiHeartOutline, mdiPlay} from '@mdi/js';


export default {
  props: {
    song: {
      type: Object,
      default: () => ({
        'name': '如果当时',
        'id': 167870,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 5771,
            'name': '许嵩',
            'tns': [],
            'alias': [],
          },
        ],
        'alia': [],
        'pop': 100,
        'st': 0,
        'rt': '',
        'fee': 8,
        'v': 41,
        'crbt': null,
        'cf': '',
        'al': {
          'id': 16953,
          'name': '自定义',
          'picUrl': 'http://p3.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
          'tns': [],
          'pic_str': '18590542604286213',
          'pic': 18590542604286212,
        },
        'dt': 316000,
        'h': {
          'br': 320000,
          'fid': 0,
          'size': 12651667,
          'vd': -22800,
        },
        'm': {
          'br': 192000,
          'fid': 0,
          'size': 7591017,
          'vd': -20100,
        },
        'l': {
          'br': 128000,
          'fid': 0,
          'size': 5060692,
          'vd': -18400,
        },
        'a': null,
        'cd': '1',
        'no': 1,
        'rtUrl': null,
        'ftype': 0,
        'rtUrls': [],
        'djId': 0,
        'copyright': 2,
        's_id': 0,
        'mark': 8192,
        'originCoverType': 0,
        'noCopyrightRcmd': null,
        'rtype': 0,
        'rurl': null,
        'mst': 9,
        'cp': 14026,
        'mv': 0,
        'publishTime': 1231516800000,
      }),
    },
  },
  data: () =>({
    mdiDotsHorizontal,
    mdiHeart,
    mdiHeartOutline,
    mdiPlay,
  }),
  computed: {
    playing() {
      return true;
    },
  },
}
</script>
<style lang="scss" scoped>
.song-btns {
  width: 60px;
}
</style>
