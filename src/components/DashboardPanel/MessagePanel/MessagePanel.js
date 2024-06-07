let app = {
  props: ['db', "size"],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
    ClockWidget: () => import(/* webpackChunkName: "components/ClockWidget" */ './../ClockWidget/ClockWidget.vue'),
    NowMessage: () => import(/* webpackChunkName: "components/NowMessage" */ './../NowMessage/NowMessage.vue'),
    NextMessage: () => import(/* webpackChunkName: "components/NextMessage" */ './../NextMessage/NextMessage.vue'),
    NoteMessage: () => import(/* webpackChunkName: "components/NoteMessage" */ './../NoteMessage/NoteMessage.vue'),
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
    computedClassName () {
      let classList = []

      if (this.size === 'small') {
        classList.push('small')
      }

      return classList
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app