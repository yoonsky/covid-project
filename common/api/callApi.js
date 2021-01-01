import axios from "axios";
const API_HOST = "http://localhost:5000/";

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */

export function callApi({ method = "get", url, data, params }) {
  return axios({
    method,
    url,
    data,
    params,
    baseURL: API_HOST,
    withCredentials: true,
  }).then((response) => {
    const { resultCode, resultMsg } = response.data.response.header;
    if (resultCode > 0) {
      console.error(resultMsg);
    }
    return {
      Success: resultCode === ResultCode.Success, //boolean value
      resultCode,
      resultMsg,
      data: response.data.response,
    };
  });
}

export const ResultCode = {
  Success: 0,
};
