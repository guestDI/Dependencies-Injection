import type { ILogger, IConfig } from '../types';
export class HTTP {
  _logger: ILogger;
  _config: IConfig;

  static $singleton = true;
  static $inject = ['logger', 'config'];

  constructor(logger: ILogger, config: IConfig) {
    this._config = config;
    this._logger = logger;
  }

  async get(url: string) {
    const response = await fetch(`${this._config.api.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this._logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this._logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
