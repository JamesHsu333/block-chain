import JSEncrypt from 'jsencrypt'
import { getOneRecord } from './../../api/record'

const state = {
    record: {

    }
}

const mutations = {
    SET_RECORD: (state, record) => {
        state.record = record
    }
}

const actions = {
    getRecord({ commit }, { ID, privateKey }) {
        return new Promise((resolve, reject) => {
            getOneRecord(ID).then((res) => {
                let record = res.data
                let Encrypt = new JSEncrypt()
                Encrypt.setPrivateKey(privateKey)
                for (let key in record) {
                    record[key] = Encrypt.decrypt(record[key])
                }
                commit('SET_RECORD', record)
                resolve()
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}