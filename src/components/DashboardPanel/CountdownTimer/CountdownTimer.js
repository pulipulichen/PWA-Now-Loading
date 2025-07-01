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
      this.calcCountdown()
      setInterval(() => {
        this.calcCountdown()
      }, 1000)
    },
    getNextBreakTime () {
      let breakTimes = this.db.localConfig.breakTime.split(',')
      let date = new Date()
      let hour = date.getHours()

      for (let i = 0; i < breakTimes.length; i++) {
        let breakTime = Number(breakTimes[i])
        if (breakTime > hour) {
          return breakTime
        }
      }
      return false
    },
    calcCountdown () {
      let nextBreakTime = this.getNextBreakTime()
      if (nextBreakTime === false) {
        this.countdown = false
        return false
      }

      let date = new Date()
      let hour = date.getHours()
      let minute = date.getMinutes()

      let remainingHours = nextBreakTime - hour - 1
      let remainingMinutes = 60 - minute + 1
      
      this.countdown = (remainingHours * 60) + remainingMinutes
    }
  }
}

export default app