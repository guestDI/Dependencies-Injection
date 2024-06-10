import type { User, IConfig, IHttp } from '../types';
export class Users {
  _http: IHttp;
  _config: IConfig

  static $inject = ['config', 'http'];

  constructor( config: IConfig, http: IHttp) {
    this._http = http;
    this._config = config;
  }

  getUsers() {
    return this._http.get(this._config.api.resources.users) as unknown as User[];
  }
}
