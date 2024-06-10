import type { IUsers, User } from './types';
import { createIoCContainer } from './ioc';
import { config } from './services/config';

const ioc = createIoCContainer();

const renderUsers = async () => {
  const usersService: IUsers = ioc.resolve('users')
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  ioc.register('config', config);
  renderUsers();
};

window.onload = (event: Event) => {
  const logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  app();
};
