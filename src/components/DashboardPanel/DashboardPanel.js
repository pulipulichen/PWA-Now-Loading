let app = {
  props: ['db'],
  components: {
    CoverImage: () => import(/* webpackChunkName: "components/CoverImage" */ './CoverImage/CoverImage.vue'),
    ClockWidget: () => import(/* webpackChunkName: "components/ClockWidget" */ './ClockWidget/ClockWidget.vue'),
    NowMessage: () => import(/* webpackChunkName: "components/NowMessage" */ './NowMessage/NowMessage.vue'),
    NextMessage: () => import(/* webpackChunkName: "components/NextMessage" */ './NextMessage/NextMessage.vue'),
    NoteMessage: () => import(/* webpackChunkName: "components/NoteMessage" */ './NoteMessage/NoteMessage.vue'),
    RolloutWidget: () => import(/* webpackChunkName: "components/RolloutWidget" */ './RolloutWidget/RolloutWidget.vue'),
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