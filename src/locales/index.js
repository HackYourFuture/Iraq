import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ar from './ar'
import ku from './ku'
import en from './en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {
    ar,
    ku,
    en,
  },
})

export default i18n
