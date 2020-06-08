import axios from 'axios'
//import store from './../store'
import {
    tip,
    toLogin,
    to403Page
} from './error-handling.js'

/**
 * Handling Request Fail 
 * @param {Number} status 
 */

const errorHandle = (status, msg) => {
    switch (status) {
        case 400:
            tip(msg)
            break
        case 401:
            tip('Log in has expired, please login again')
            setTimeout(() => {
                toLogin()
            }, 1000)
            break
        case 403:
            to403Page()
            break
        case 404:
            tip(msg)
            break
        default:
            tip('Unknown Error: ' + msg)
    }
}

const HttpService = axios.create({
    baseURL: '',
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json'
    }
})

HttpService.interceptors.request.use(async(config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

HttpService.interceptors.response.use(async(res) => {
    return res
}, (error) => {
    if (error) {
        // Get error response
        console.log(error.response)
        errorHandle(error.response.status, error.response.data.errors)
        return Promise.reject(error.response.data)
    } else {
        // Error but not get response
        if (!window.navigator.onLine) {
            tip('Internet has been offline, please check')
        } else {
            return Promise.reject(error.response.data)
        }
    }
})

export { HttpService }