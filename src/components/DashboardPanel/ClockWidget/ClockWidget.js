import dayjs from 'dayjs'

let app = {
  props: ['db', 'size'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      HH: null,
      mm: null,
      ss: null,
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    HHmmss () {
      document.title = this.HHmmss
    }
  },
  computed: {
    HHmmss () {
      return this.HH + ':' + this.mm + ':' + this.ss
    },
    computedStyle () {
      let borderWidth = '0.1rem'

      if (this.size === 'small') {
        borderWidth = '0.05rem'
      }

      let output = {
        color: this.db.localConfig.clockColor,
        '-webkit-text-stroke': borderWidth + ' ' + this.db.localConfig.backgroundColor,
        'text-stroke': borderWidth + ' ' + this.db.localConfig.backgroundColor,
      }
      if (!this.HH) {
        output['visibility'] = 'hidden'
      }

      return output
    },
    computedClassName () {
      let classList = []

      if (this.size === 'small') {
        classList.push('small')
      }

      return classList
    }
  },
  mounted() {
    this.initTimer()
    // console.log($)
    // this.initFont()
  },
  methods: {
    initTimer () {
      setInterval(() => {
        let day = dayjs()
        // this.HHMMSS = day.format('HH:mm:ss')
        this.HH = day.format('HH')
        this.mm = day.format('mm')
        this.ss = day.format('ss')
      }, 1000)
    }, 
    clearMessage () {
      this.db.localConfig.nowMessage = 'NOW: '
      this.db.localConfig.nextMessage = 'NEXT: '
      this.db.localConfig.noteMessage = ''
    }
    // initFont: async function () {
    //   while (document.getElementById('ClockWidget').length === 0) {
    //     await this.db.utils.AsyncUtils.sleep()
    //   }
      
    //   try {
    //     TextFill("#ClockWidget",{
    //       autoResize: true,
    //     })
    //   }
    //   catch (e) {
    //     console.error(e)
    //     await this.db.utils.AsyncUtils.sleep(1000)
    //     this.initFont()
    //   }
    // }
  }
}

export default app