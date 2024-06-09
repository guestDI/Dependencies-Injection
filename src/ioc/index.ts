import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { config } from '../services/config';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();
  // you can register some resources right now below...

  ioc.registerClass('http', HTTP);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('users', Users);
  ioc.register('config', config);

  return ioc;
};
