export const formatPost = obj => {
  let sendData = "";
  for (var key in obj) {
    if (sendData !== "") sendData = sendData + "&";
    sendData = sendData + key + "=" + obj[key];
  }
  return sendData;
};
