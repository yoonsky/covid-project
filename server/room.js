const convert = require("xml-js");
const request = require("request");

const roomData = (callback) => {
  const SERVICE_KEY =
    "cAVo5I1QPr87FxTakj9wUXtJQoL8Ji%2BfbNPlSY1CeGy39axWVjmrvLw8uxpBWBmPuevW4W9uLBPhwVD27b0V3g%3D%3D";
  var url =
    "http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList";
  var queryParams =
    "?" + encodeURIComponent("ServiceKey") + `=${SERVICE_KEY}`; /* Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("2"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("10"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("spclAdmTyCd") +
    "=" +
    encodeURIComponent("A0"); /* */
  var requestUrl = url + queryParams;

  console.log(requestUrl);

  request.get(requestUrl, (err, res, body) => {
    if (err) {
      console.log(`err=>${err}`);
      // callback({
      //   error: err,
      // });
    } else {
      if (res.statusCode == 200) {
        let result = body;
        // console.log(`body data => ${result}`);
        let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
        console.log(`xml to json => `);

        callback({
          room: xmlToJson,
        });
      }
    }
  });
};

module.exports = roomData;
