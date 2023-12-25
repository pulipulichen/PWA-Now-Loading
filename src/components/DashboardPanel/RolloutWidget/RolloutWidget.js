let app = {
  props: ['db'],
  // components: {
  //   // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  // },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      resetTimer: null,
      resetInteval: (1000 * 60 * 30),
      // resetInteval: (1000 * 6)
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    'db.localConfig.rolloutNumber' () {
      this.scheduleToReset()
    }
  },
  computed: {
    computedClassList () {
      let classList = [
      ]

      if (this.db.localConfig.rolloutColor.startsWith('#') === false) {
        classList.push(this.db.localConfig.rolloutColor)
      }

      return classList
    },
    computedStyleList () {
      let styleList = {}

      if (this.db.localConfig.rolloutColor.startsWith('#')) {
        styleList['background-color'] = this.db.localConfig.rolloutColor
      }

      return styleList
    },
  },
  mounted() {
    this.scheduleToReset()
  },
  methods: {
    scheduleToReset () {
      if (this.db.localConfig.rolloutNumber === null) {
        return false
      }

      clearTimeout(this.resetTimer)
      this.resetTimer = setTimeout(() => {
        this.db.localConfig.rolloutNumber = null
      }, this.resetInteval)
    }
  }
}

export default app