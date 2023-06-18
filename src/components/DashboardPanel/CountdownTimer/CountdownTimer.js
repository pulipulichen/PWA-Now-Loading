let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      countdown: 0
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
        color: this.db.localConfig.scheduleMessageColor
      }
    }
  },
  mounted() {
    this.initCountdown()
  },
  methods: {
    initCountdown () {
      setInterval(() => {
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()

        let isMorning = (hour < 12)

        let isNextHour = false
        if (isMorning) {
          isNextHour = ((hour % 2) === 0)
        }
        else {
          isNextHour = ((hour % 2) === 1)
        }

        let countdown = 0
        if (isNextHour) {
          countdown = countdown + 60
        }
        countdown = countdown + (60 - minute)

        this.countdown = countdown
      }, 1000)
    }
  }
}

export default app