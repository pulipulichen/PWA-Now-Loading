let app = {
  props: ['db'],
  components: {
    CoverImage: () => import(/* webpackChunkName: "components/CoverImage" */ './CoverImage/CoverImage.vue'),
    ClockWidget: () => import(/* webpackChunkName: "components/ClockWidget" */ './ClockWidget/ClockWidget.vue'),
    ScheduleMessage: () => import(/* webpackChunkName: "components/ScheduleMessage" */ './ScheduleMessage/ScheduleMessage.vue'),
    PublicMessage: () => import(/* webpackChunkName: "components/PublicMessage" */ './PublicMessage/PublicMessage.vue')
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
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app