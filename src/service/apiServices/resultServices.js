import { aiApiDomain } from '../apiserver'
import axios from "axios";

export const getFaultDesc = async (data) => {
    try {
        let config = {
            method: 'post',
            url: ` https://${aiApiDomain}/getFaultDesc`,
            data: data,
            headers: {
                'Content-type': 'application/json',
            }
        }
        let res = await axios(config);
        return res
    } catch (error) {
        console.error(error)
    }
};

export const getCardDataAi = async (data) => {
    try {
        let config = {
            method: 'post',
            url: `https://${aiApiDomain}/getCardDataAi?dataname=commonResolution`,
            data: data,
            headers: {
                'Content-type': 'application/json',
            }
        }
        let res = await axios(config);
        return res
    } catch (error) {
        console.error(error)
    }
}

export const getCardData = async (data) => {
    try {
        let config = {
            method: 'post',
            url: `https://${aiApiDomain}/getCardData?dataname=commonResolution`,
            data: data,
            headers: {
                'Content-type': 'application/json',
            }
        }
        let res = await axios(config);
        return res
    } catch (error) {
        console.error(error)
    }
}