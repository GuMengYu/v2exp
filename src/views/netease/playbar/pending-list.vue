<template>
  <v-navigation-drawer
    v-show="open"
    fixed
    permanent
    right
    width="300"
  >
    <v-toolbar
      tag="header"
      flat
      class="v-app-underline"
    >
      <div class="font-weight-medium text--primary">
        播放队列
      </div>
    </v-toolbar>
    <v-list
      nav
      dense
      two-line
    >
      <v-list-item-group
        v-model="currentSong"
        color="primary"
      >
        <v-list-item
          v-for="(song, i) in pendingList"
          :key="i"
          :value="song.id"
        >
          <v-img
            :src="$$(song, 'al', 'picUrl')"
            max-height="50"
            max-width="50"
            class="mr-4"
            lazy-src="@assets/girl.jpg"
          />
          <v-list-item-content>
            <v-list-item-title v-text="song.name" />
            <v-list-item-subtitle
              class="text--primary"
              v-text="$$(song, 'ar', '0', 'name')"
            />
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              text
              color="grey lighten-1"
              x-small
              class="list-delete-button"
            >
              <v-icon small>
                {{ mdiClose }}
              </v-icon>
            </v-btn>
            <v-list-item-action-text>{{ song.dt | formatDuring }}</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiClose } from '@mdi/js';

export default {
  data(){
    return {
      mdiClose,
    };
  },
  computed: {
    open() {
      return this.$store.state.music.showList === true;
    },
    pendingList() {
      return this.$store.state.music.pendingList;
    },
    currentSong() {
      return this.$store.state.music.song?.id;
    },
  },
  watch: {
  },
  created() {

  },
  mounted() {
    // todo: delete me for test
    let pendingList = [
      {
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
        'al': {
          'id': 16953,
          'name': '自定义',
          'picUrl': 'http://p3.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
          'tns': [],
          'pic_str': '18590542604286213',
          'pic': 18590542604286212,
        },
        'dt': 316000,
      },
      {
        'name': '如果当时2020',
        'id': 1488737309,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 5771,
            'name': '许嵩',
            'tns': [],
            'alias': [],
          },
          {
            'id': 37207396,
            'name': '朱婷婷',
            'tns': [],
            'alias': [],
          },
        ],
        'alia': [
          '不曾遗忘的符号',
        ],
        'al': {
          'id': 97118598,
          'name': '如果当时2020',
          'picUrl': 'http://p3.music.126.net/aXvj5BYRCoCWgdD40_CgXg==/109951165425092026.jpg',
          'tns': [],
          'pic_str': '109951165425092026',
          'pic': 109951165425092030,
        },
        'dt': 306783,
      },
      {
        'name': '梁静茹-会呼吸的痛（Diy remix）',
        'id': 1377364763,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 15061600,
            'name': 'Diy',
            'tns': [],
            'alias': [],
          },
        ],
        'al': {
          'id': 73397085,
          'name': '自定义v',
          'picUrl': 'http://p3.music.126.net/1F_vwslJSBF2OpHZQf-fbA==/109951163840319860.jpg',
          'tns': [],
          'pic_str': '109951163840319860',
          'pic': 109951163840319860,
        },
        'dt': 110856,
      },
      {
        'name': '秋天的海',
        'id': 288003,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 9275,
            'name': '苏慧伦',
            'tns': [],
            'alias': [],
          },
        ],
        'al': {
          'id': 28579,
          'name': '恋恋真言',
          'picUrl': 'http://p3.music.126.net/cllSRP15u4y5XjbfvaxQog==/109951165422716842.jpg',
          'tns': [],
          'pic_str': '109951165422716842',
          'pic': 109951165422716850,
        },
        'dt': 250560,
      },
      {
        'name': '没有人能够比我们更接近对方',
        'id': 1468592465,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 12711,
            'name': '声音玩具',
            'tns': [],
            'alias': [],
          },
        ],
        'al': {
          'id': 93526218,
          'name': '没有人能够比我们更接近对方',
          'picUrl': 'http://p3.music.126.net/-Tpd28BRquZL6_4qU4GVnw==/109951165205974157.jpg',
          'tns': [],
          'pic_str': '109951165205974157',
          'pic': 109951165205974160,
        },
        'dt': 370573,
      },
      {
        'name': '爱X无限大',
        'id': 316275,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 10202,
            'name': '元若蓝',
            'tns': [],
            'alias': [],
          },
        ],
        'al': {
          'id': 31337,
          'name': '爱X无限大',
          'picUrl': 'http://p4.music.126.net/pnapwpjZGgFnb1tOuz2mNA==/34084860475761.jpg',
          'tns': [],
          'pic': 34084860475761,
        },
        'dt': 205000,
      },
    ];
    this.$store.commit('music/UPDATE_PENDING_LIST', pendingList);
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.list-delete-button {
  min-width: 20px!important;
  padding: 0!important;
}
</style>
