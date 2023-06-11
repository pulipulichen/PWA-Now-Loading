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
    }
  }
}

export default app