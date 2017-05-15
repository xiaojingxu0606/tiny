import HTTP from './core';
import Interceptor from './interceptor';
import Request from './request';
import Response from './response';

function createInstance() {
  return new HTTP();
}

/**
 * @alias $http
 * @memberof Ti
 * @see Http
 */
const http = createInstance();
http.create = config => createInstance(config);

/**
 * @alias $http.Interceptor
 * @memberof Ti
 * @see Interceptor
 */
http.Interceptor = Interceptor;

export default http;

