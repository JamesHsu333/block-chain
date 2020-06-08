import { HttpService } from './../util/http-request.js'
/**
 * Post Request to backend
 * 
 * @param {string} id Patient ID
 * 
 * @return {Promise} HttpService
 * 
 */
export const postRequest = ({ staffName, staffID, patientName, patientID, destination, origin }) => {
    return HttpService({
        url: 'request/',
        method: 'post',
        data: {
            "staff_name": staffName,
            "staff_id": staffID,
            "patient_name": patientName,
            "patient_id": patientID,
            "destination": destination,
            "origin": origin
        }
    })
}