import { aiApiDomain, backEndDomain } from '../apiserver'
import axios from "axios";
const jwt = localStorage.getItem('UserToken')
const TenantId = localStorage.getItem('TenantId');


export const modelPrefixApi = async (val) => {
    try {
        let config = {
            method: 'post',
            url: `https://${backEndDomain}/webapi/webuserInput/webmodelPrefix`,
            data: { modelPrefix: val },
            headers: {
                'Content-type': 'application/json',
                'token': jwt,
            }
        }
        let res = await axios(config)
        return res.data.Data
    } catch (error) {
        console.error(error)
    }
};

export const problemCodeApi = async (val) => {
    try {
        let config = {
            method: 'post',
            url: `https://${backEndDomain}/webapi/webuserInput/webproblemCode`,
            data: { problemCodeDescription: val },
            headers: {
                'Content-type': 'application/json',
                'token': jwt,
            }
        }
        let res = await axios(config)
        return res.data.problemCodeData
    } catch (error) {
        console.error(error)
    }
}

export const smcsCodeApi = async (val) => {
    try {
        let config = {
            method: 'post',
            url: `https://${backEndDomain}/webapi/webuserInput/webSMCSComponent`,
            data: { SMCSComponentDescription: val },
            headers: {
                'Content-type': 'application/json',
                'token': jwt,
            }
        }
        let res = await axios(config)
        return res.data.SMCSComponentDesc
    } catch (error) {
        console.error(error)
    }
}

export const getModelForm = async (data) => {
    try {
        let config = {
            method: 'post',
            url: `https://${backEndDomain}/webapi/webuserInput/webfindSolution`,
            data: { 'requestId': data },
            headers: {
                'Content-type': 'application/json',
                'token': jwt,
            }
        }

        let res = await axios(config);
        return res
    } catch (error) {
        console.error(error)
    }
}

export const formSubmit = async (formData) => {
    let { serialNumber, modelPrefix, modelPrefixStatus, serialNoRange, faultCode, problemCode, smcsCode } = formData;

    if (faultCode !== '' || problemCode !== '' || smcsCode !== '') {
        if (modelPrefix !== '' || serialNumber !== '' || serialNoRange !== '') {

            let modelprefix = modelPrefix ? modelPrefix.split("/") : "";
            let smcs = smcsCode ? smcsCode.split("-") : "";
            let pd = problemCode ? problemCode.split("-") : ""

            const payload = {
                modelprefix: modelprefix[0] ? modelprefix[0].trim() : "",
                serialno: modelprefix[1] ? modelprefix[1] : "",
                serialnoRange: "",
                problemdes: pd[0] ? pd[0].replace(/^0+/, '') : "",
                smcs: smcs[0] ? smcs[0] : "",
                faultcode: faultCode ? faultCode.toUpperCase() : '',
                Actual_serialno: modelPrefixStatus && serialNumber,
                PCode_description: pd[1] ? pd[1] : "",
                SCode_description: smcs[1] ? smcs[1] : ""
            };

            // console.log('pay', payload)

            try {
                let config = {
                    method: 'post',
                    url: `https://${aiApiDomain}/directsearchlength`,//http://${aiApiDomain}/directsearchlength
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
        }
    }

}

export const webAISearchHistory = async (formData) => {
    try {

        let { serialNumber, modelPrefix, faultCode, problemCode, smcsCode } = formData;

        let AIData = {
            "serialNumber": serialNumber ? serialNumber : "",
            "modelPrefix": modelPrefix ? modelPrefix : '',
            "faultCode": faultCode ? faultCode : "",
            "problemDescription": problemCode ? problemCode : '',
            "SMCScode": smcsCode ? smcsCode : '',
            "TenantId": TenantId,
            "searchDateTime": new Date().toISOString()
        };

        let config = {
            method: 'post',
            url: `https://${backEndDomain}/webapi/webuserInput/webAISearchHistory`,
            data: AIData,
            headers: {
                'Accept': 'application/json',
                'token': jwt,
            }
        }
        await axios(config)
    } catch (error) {
        console.error(error)
    }
};

export const dataNumber = async (length, formData) => {
    let { serialNumber, modelPrefix, modelPrefixStatus, serialNoRange, faultCode, problemCode, smcsCode } = formData;
    let modelprefix = modelPrefix ? modelPrefix.split("/") : "";
    let smcs = smcsCode ? smcsCode.split("-") : "";
    let pd = problemCode ? problemCode.split("-") : ""
    const payload2 = {
        modelprefix: modelprefix[0] ? modelprefix[0].trim() : "",
        serialno: modelprefix[1] ? modelprefix[1] : "",
        serialnoRange: "",
        problemdes: pd[0] ? pd[0].replace(/^0+/, '') : "",
        smcs: smcs[0] ? smcs[0] : "",
        faultcode: faultCode ? faultCode : "",
        Actual_serialno: modelPrefixStatus && serialNumber,
        PCode_description: pd[1] ? pd[1] : "",
        SCode_description: smcs[1] ? smcs[1] : ""
    }
    try {
        let config = {
            method: 'post',
            url: `https://${aiApiDomain}/directsearch?datanumber=${length}`,
            data: payload2,
            headers: {
                'Content-type': 'application/json',
            }
        }
        let res = await axios(config)
        return res;
    } catch (error) {
        console.error(error)
    }
}

export const aiSearch = async (formData) => {
    let { modelPrefix, modelPrefixStatus, serialNoRange, faultCode, problemCode, smcsCode } = formData;
    const modelprefix = modelPrefix.split("/");
    const pd = problemCode.split("-");
    const smcs = smcsCode.split("-");
    let serialNoVal = modelprefix[1];

    const payload2 = {
        modelprefix: modelprefix[0] ? modelprefix[0].trim() : "",
        serialno: modelprefix[1] ? modelprefix[1] : "",
        serialnoRange: "",
        problemdes: pd[0] ? pd[0].replace(/^0+/, '') : "",
        smcs: smcs[0] ? smcs[0] : "",
        faultcode: faultCode ? faultCode.toUpperCase() : "",
        Actual_serialno: modelPrefixStatus && serialNoVal,
        PCode_description: pd[1] ? pd[1] : "",
        SCode_description: smcs[1] ? smcs[1] : ""
    }

    try {
        let config = {
            method: 'post',
            url: `https://${aiApiDomain}/aisearchlength`,//http://${aiApiDomain}/directsearchlength
            data: payload2,
            headers: {
                'Content-type': 'application/json',
            }
        }
        let res = await axios(config)
        return res;
    } catch (error) {
        console.error(error)
    }
};


export const aiDatanumber = async (length, formData) => {
    let { modelPrefix, modelPrefixStatus, serialNoRange, faultCode, problemCode, smcsCode } = formData;
    const modelprefix = modelPrefix.split("/");
    const pd = problemCode.split("-")
    const smcs = smcsCode.split("-");
    let serialNoVal = modelprefix[1];

    const payload2 = {
        modelprefix: modelprefix[0] ? modelprefix[0].trim() : "",
        serialno: modelprefix[1] ? modelprefix[1] : "",
        serialnoRange: "",
        problemdes: pd[0] ? pd[0].replace(/^0+/, '') : "",
        smcs: smcs[0] ? smcs[0] : "",
        faultcode: faultCode ? faultCode.toUpperCase() : "",
        Actual_serialno: modelPrefixStatus && serialNoVal,
        PCode_description: pd[1] ? pd[1] : "",
        SCode_description: smcs[1] ? smcs[1] : ""
    }

    try {
        let config = {
            method: 'post',
            url: `https://${aiApiDomain}/aisearch?datanumber=${length}`,
            data: payload2,
            headers: {
                'Content-type': 'application/json',
            }
        }
        let res = await axios(config)
        return res;
    } catch (error) {
        console.error(error)
    }
}