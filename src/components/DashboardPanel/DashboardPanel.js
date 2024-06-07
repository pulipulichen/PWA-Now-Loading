let app = {
  props: ['db'],
  components: {
    CoverImage: () => import(/* webpackChunkName: "components/CoverImage" */ './CoverImage/CoverImage.vue'),
    RolloutWidget: () => import(/* webpackChunkName: "components/RolloutWidget" */ './RolloutWidget/RolloutWidget.vue'),
    CountdownTimer: () => import(/* webpackChunkName: "components/CountdownTimer" */ './CountdownTimer/CountdownTimer.vue'),
    IframeWidget: () => import(/* webpackChunkName: "components/IframeWidget" */ './IframeWidget/IframeWidget.vue'),
    MessagePanel: () => import(/* webpackChunkName: "components/MessagePanel" */ './MessagePanel/MessagePanel.vue'),
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
    coverType () {
      let isURL = false
      try {
        if (this.db.localConfig.iframeURL !== '') {
          new URL(this.db.localConfig.iframeURL)
          isURL = true
        }
      }
      catch (e) {}

      if (isURL) {
        return 'iframe'
      }
      else {
        return 'image'
      }
    }
  },
  mounted() {
    
  },
  methods: {
    
    toggleFullScreen() {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  }
}

export default app