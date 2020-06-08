import { HttpService } from './../util/http-request.js'
/**
 * Get one record of the patient
 * 
 * @param {string} id Patient ID
 * 
 * @return {Promise} HttpService
 * 
 */
export const getOneRecord = (id) => {
    return HttpService({
        url: 'records/' + id,
        method: 'get'
    })
}