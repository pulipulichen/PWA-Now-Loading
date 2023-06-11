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
      /**
       * <img 
  class="CoverImage"
  :src="db.localConfig.coverImage"
  :style="computedStyle"
  @click="db.config.showConfiguration = !db.config.showConfiguration" />
       */

      let styleList = {
        'background-image': `url(${this.db.localConfig.coverImage})`,
        'background-size': this.db.localConfig.coverSize
      }

      let coverStyle = this.db.localConfig.coverStyle
      if (coverStyle === 'round') {
        // return {'border-radius': '50%'}
        styleList['border-radius'] = '50%'
      }
      else if (coverStyle === 'round-corners-25') {
        // return {'border-radius': '25%'}
        styleList['border-radius'] = '25%'
      }
      return styleList
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app