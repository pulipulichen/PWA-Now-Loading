import dayjs from 'dayjs'
import $ from 'jquery'
import TextFill from 'textfilljs';

let app = {
  props: ['db'],
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
      if (!this.HH) {
        return {
          'visibility': 'hidden',
        }
      }
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