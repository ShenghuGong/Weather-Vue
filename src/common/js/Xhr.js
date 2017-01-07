/**
 * Created by Ivan on 2016/12/23.
 */
export default class Xhr {
  static doRequest(options) {
    const queryParams = Object.assign({
      key: '5a7f3bf3b3814b20ba6fa59388c3d0ae'
    }, options.queryParams);
    let url = `${options.path}?${$.param(queryParams)}`;
    url = ((!new RegExp('^http', 'i').test(url) && cfg[options.remote || 'biz']) ||
      '') + url;

    const params = JSON.stringify(options.params);

    const opts = {
      data: params || options.data,
      type: options.type,
      url,
      contentType: options.contentType || 'application/json',
      timeout: options.timeout || 15000,
      dataType: options.dataType || 'json',
      processData: options.processData || true,
      withCredentials: true,
      crossDomain: true,

      beforeSend(xhr, settings) {
      },
      success(data, status, xhr) {
        options.success(data);
      },
      error(xhr, errorType, error) {
        options.error(error);
      },
      complete(xhr, status) {
        options.complete(xhr);
      }
    };

    $.ajax(opts);
  }
}
