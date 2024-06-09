import { Users } from './services/users';

import type { User, IConfig, IHttp } from './types';
import { createIoCContainer } from './ioc';

const renderUsers = async (config: IConfig, http: IHttp) => {
  const usersService = new Users(config, http);
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = (config: IConfig, http: IHttp) => {
  renderUsers(config, http);
};

window.onload = (event: Event) => {
  const ioc = createIoCContainer();

  const logger = ioc.resolve('logger');
  const config = ioc.resolve('config');
  const http = ioc.resolve('http');

  logger.info('Page is loaded.');

  app(config, http);
};
