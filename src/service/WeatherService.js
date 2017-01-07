/**
 * Created by Ivan on 2017/1/6.
 */
import BaseService from './BaseService';

class WeatherService extends BaseService {

  /**
   * 获取实况天气接口
   * @param city 查询的城市
   * @param options options
   */
  static getNowWeather(city, options) {
    options.queryParams = Object.assign({ city }, options.queryParams);
    WeatherService.doRequest(WeatherService.PATH.NOW, super.TYPE.GET, options);
  }
}

WeatherService.PATH = {
  NOW: 'https://free-api.heweather.com/v5/now'
};
export default WeatherService;
