import axios from 'axios'
import { baseUrl } from '@/global'

const success = res => res
const error = err => {
    if (401 === err.response.status) {
        window.location = baseUrl
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)