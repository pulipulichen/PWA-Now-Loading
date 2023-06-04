// https://www.npmjs.com/package/vue-quill-editor
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
    quillEditor
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
    editorOption () {
      return {
        placeholder: '',
        theme: 'bubble'
      }
    },
    computedQuillEditorStyle () {
      return { 
        maxHeight: '40vh', 
        'overflow-y': 'auto', 
        color: this.db.localConfig.noteMessageColor,
        // 'textAlign': 'center', 
        // 'fontSize': '1.5rem'
      }
    },
    computedClassList () {
      let classList = [];

      if (this.db.localConfig.noteMessage.trim() !== '') {
        classList.push('ui tall stacked segment')
      }

      return classList
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app