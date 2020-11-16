<template>
  <v-menu
    offset-y
    open-on-hover
    slide-x
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-icon left>
          {{ mdiTranslate }}
        </v-icon>
        {{ localeText }}
        <v-icon
          right
          class="ml-0"
          size="14"
        >
          {{ mdiChevronDown }}
        </v-icon>
      </v-btn>
    </template>
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="currentLocale"
        color="primary"
      >
        <v-subheader
          class="font-weight-black text-uppercase"
          v-text="$t('common.translations')"
        />
        <v-list-item
          v-for="o in locales"
          :key="o.val"
          :value="o.val"
          @click="changeLocale(o.val)"
        >
          <v-list-item-title v-text="o.name" />
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mdiTranslate, mdiChevronDown } from '@mdi/js';

const supportLocalMap = {
  en: 'English',
  zh: '简体中文',
};
const locales = [
      {
        name: '简体中文',
        val: 'zh',
      },
      {
        name: 'English',
        val: 'en',
      },
      {
        name: '日本語',
        val: 'ja',
      },
      {
        name: '한국어',
        val: 'ko',
      },
    ];
export default {
  name: 'LanguageSelect',
  data() {
    return {
      locales,
      currentLocale: this.$store.getters['system/locale'],
      mdiChevronDown,
      mdiTranslate,
    };
  },
  computed: {
    localeText() {
      return supportLocalMap[this.currentLocale];
    },
  },
  methods: {
    changeLocale(locale) {
      if(Object.keys(supportLocalMap).includes(locale)) {
        this.$store.commit('system/updateLanguage', locale);
        // this.currentLocale = locale;
        // this.$eventHub.$emit('lang', locale);
        // location.reload();
        this.$i18n.locale = locale;
        this.$dayjs.locale(locale);
      } else {
        //restore currentLocale
        this.$nextTick().then(() => {
          this.currentLocale = this.$store.getters['system/locale'];
        });
        this.$message({message: this.$t('common.not_support'), type: 'error'});
      }
    },
  },
};
</script>

<style scoped>

</style>
