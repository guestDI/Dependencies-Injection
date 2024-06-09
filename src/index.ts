import type { User, IUsers } from './types';
import { createIoCContainer } from './ioc';

const renderUsers = async (usersServiceInstance: IUsers) => {
  const usersService = usersServiceInstance;
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = (usersServiceInstance: IUsers) => {
  renderUsers(usersServiceInstance);
};

window.onload = (event: Event) => {
  const ioc = createIoCContainer();

  const logger = ioc.resolve('logger');
  const usersServiceInstance = ioc.resolve('users')

  logger.info('Page is loaded.');

  app(usersServiceInstance);
};
