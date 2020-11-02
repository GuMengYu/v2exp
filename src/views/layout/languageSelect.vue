<template>
  <v-menu
    offset-y
    open-on-hover
    slide-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-icon left>
          mdi-translate
        </v-icon>
        {{ localeText }}
        <v-icon right>
          mdi-menu-down
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </template>
    <v-list
      nav
      dense
    >
      <v-list-item
        v-for="o in locales"
        :key="o.val"
        @click="changeLocale(o.val)"
      >
        <v-list-item-title v-text="o.name" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
const supportLocalMap = {
  en: 'English',
  zh: '简体中文',
};
export default {
  name: 'LanguageSelect',
  data: () => ({
    locales: [
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
    ],
    currentLocale: localStorage.getItem('locale'),
  }),
  computed: {
    localeText() {
      return supportLocalMap[this.currentLocale];
    },
  },
  methods: {
    changeLocale(locale) {
      if(Object.keys(supportLocalMap).includes(locale)) {
        localStorage.setItem('locale', locale);
        this.currentLocale = localStorage.getItem('locale');
        // this.$eventHub.$emit('lang', locale);
        // location.reload();
        this.$i18n.locale = locale;
        this.$dayjs.locale(locale);
      } else {
        this.$message({message: this.$t('common.not_support'), type: 'error'});
      }
    },
  },
};
</script>

<style scoped>

</style>
