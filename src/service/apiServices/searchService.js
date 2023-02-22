import { aiApiDomain } from '../apiserver'
import axios from "axios";


export const aisearch = async (id, payload) => {
    try {
        let config = {
            method: 'post',
            url: `https://${aiApiDomain}/aisearch?datanumber=${id}`,
            data: payload,
            headers: {
                'Content-type': 'application/json',
            }
        }
        let res = await axios(config)
        return res
    } catch (error) {
        console.error(error)
    }
};

export const directsearch = async (id, payload) => {
    try {
        let config = {
            method: 'post',
            url: `https://${aiApiDomain}/directsearch?datanumber=${id}`,
            data: payload,
            headers: {
                'Content-type': 'application/json',

            }
        }
        let res = await axios(config)
        return res
    } catch (error) {
        console.log(error);
    }
}