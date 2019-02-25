import Vue from 'vue'

export const userKey = '__knowledge_user'
export const baseApiUrl = 'http://mmarques-com-br.umbler.net'
export const baseUrl = '/knowledge-static/'

export function showError(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.error({ msg: e.response.data })
    } else if (typeof e === 'string') {
        Vue.toasted.global.error({ msg: e })
    } else {
        Vue.toasted.global.error()
    }
}

export default { userKey, baseApiUrl, showError }