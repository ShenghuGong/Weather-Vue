/**
 * BaseService
 * Created by Ivan on 2017/1/6.
 */
import Xhr from '../common/js/Xhr';

export default class BaseService {

  /**
   * 发送XML HTTP Request 请求
   * @param path URL Path
   * @param type request type
   * @param options options
   */
  static doRequest(path, type, options) {
    Object.assign(options || {}, {
      type,
      path
    });
    Xhr.doRequest(options);
  }
}

BaseService.TYPE = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
