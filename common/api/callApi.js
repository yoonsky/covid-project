import axios from "axios";
const API_HOST = process.env.API_HOST;

export default function callApi({ method = "get", url, data, params }) {
  return axios({
    method,
    url,
    data,
    params,
    baseUrl: API_HOST,
    withCredentials: true,
  }).then((response) => {
    const { resultCode, resultMsg } = response.data;
    const parseCode = parseInt(resultCode);
    if (parseCode > 0) {
      console.error(resultMsg);
    }
    return {
      Success: parseCode === resultcode.Success, //boolean value
      resultCode,
      data: response.data,
    };
  });
}

const resultcode = {
  Success: 0,
};
