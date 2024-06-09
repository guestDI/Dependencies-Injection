export interface User {
  id: number;
  name: string;
}

export interface IUsers {
  getUsers: () => User[]
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface IConfig {
  api: ApiConfig;
}

export interface IHttp {
  get: (url: string) => {};
}

export interface ILogger {
  info: (message: string) => void;
  error: (message: string) => void;
}