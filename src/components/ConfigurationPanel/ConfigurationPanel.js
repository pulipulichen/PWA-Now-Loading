import CoverList from './CoverList.js'
import ThemeList from './ThemeList.js'

let app = {
  props: ['db'],
  components: {
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      CoverList,
      ThemeList
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
    getFilename (coverImage) {
      coverImage = (coverImage + '').trim()
      let pos = coverImage.lastIndexOf('/') + 1
      if (pos === 0) {
        return coverImage
      }

      coverImage = coverImage.slice(pos)
      return coverImage
    },
    setTheme (config) {
      for (let key in config) {
        if (key === 'title' || config[key] === '') {
          continue
        }
        this.db.localConfig[key] = config[key]
      }
      this.db.config.showConfiguration = false
    },
    popup (url) {
      this.db.utils.PopupUtils.open(url)
    },
    setupDemo () {
      this.db.localConfig.nowMessage = 'Now Message'
      this.db.localConfig.nextMessage = 'Next Message'
      this.db.localConfig.noteMessage = 'Note Message'
      this.db.localConfig.iframeURL = 'https://gdoc.pub/doc/e/2PACX-1vSxSMgfAPH9e8UgVOjvjHjy_cr7gWyKDDNH-EtBBdH88pmuFCYSsULWIo71qIXSXcn5DOcHZVf1AmSp'

      this.db.config.showConfiguration = false
    }
  }
}

export default app