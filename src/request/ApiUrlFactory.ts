import {CONFIG} from '../request/Config';

export const makeApiUrl = (path: string): string =>
  `${CONFIG.baseLink}${CONFIG.contextApi}${path}`;
