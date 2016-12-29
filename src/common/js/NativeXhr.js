/**
 * A native xhr for Practice
 * TODO use promise
 * Created by Ivan on 2016/12/23.
 */
export default class NativeXhr {
  static doRequest(success, failed, final) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let response = httpRequest.response;
          if (httpRequest.response && typeof httpRequest.response === 'string') {
            response = JSON.parse(response);
          }
          success(response);
        } else {
          failed();
        }
        final();
      }
    }
    ;
    httpRequest.open('GET', 'https://free-api.heweather.com/v5/now?city=hangzhou&key=5a7f3bf3b3814b20ba6fa59388c3d0ae', true);
    httpRequest.send();
  }
}
