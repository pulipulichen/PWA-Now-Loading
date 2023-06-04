let app = {
  props: ['db'],
  // components: {
  //   // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  // },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    'db.localConfig.rolloutNumber' () {
      setTimeout(() => {
        this.db.localConfig.rolloutNumber = null
      }, 1000 * 60 * 30)
    }
  },
  computed: {
    computedClassList () {
      let classList = [
        this.db.localConfig.rolloutColor
      ]

      return classList
    }
  },
  // mounted() {
    
  // },
  // methods: {
    
  // }
}

export default app