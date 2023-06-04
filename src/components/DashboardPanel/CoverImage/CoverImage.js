let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    computedStyle () {
      let coverStyle = this.db.localConfig.coverStyle
      if (coverStyle === 'round') {
        return {'border-radius': '50%'}
      }
      else if (coverStyle === 'round-corners-25') {
        return {'border-radius': '25%'}
      }
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app