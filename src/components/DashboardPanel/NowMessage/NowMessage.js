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
      return {
        color: this.db.localConfig.scheduleMessageColor,
        '-webkit-text-stroke': '0.05rem ' + this.db.localConfig.backgroundColor,
        'text-stroke': '0.05rem ' + this.db.localConfig.backgroundColor,
      }
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app