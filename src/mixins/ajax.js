

export default {
  methods: {
    /**
     * Post data to WordPress
     * @param {string} action The wordpress action to use
     * @param {object} payload The data to send
     * @param {function} cb Optional callback to call (gets passed a response object)
     */
    post: function (action, payload, cb) {
      if (this.board.ajaxurl) {
        let data = new FormData()
  
        data.append('action', action)
        data.append('_ajax_nonce', this.board.nonce)
  
        Object.keys(payload).forEach(key => {
          data.append(key, payload[key])
        })
  
        this.axios.post(this.board.ajaxurl, data).then(res => {
          cb && cb(res)
        })
      }
    }
  }
}