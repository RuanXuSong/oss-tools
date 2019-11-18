/*
 * @文件描述: 此文件会在入口文件的最前面被自动引入，可以在这里加载补丁，做一些初始化操作。
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-25 13:43:43
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-11-18 17:54:37
 */
import * as Sentry from '@sentry/browser';
import sentryConfig from '../sentry.config';
import '@/services';
import { CustomWindow } from './interfaces/common';

((window as unknown) as CustomWindow).requestConfig = {
  withCredentials: false,
  getToken() {
    return Promise.resolve(lscache.get('token'));
  },
};
((window as unknown) as CustomWindow).authConfig = {
  url: '',
  client_id: '',
  client_secret: '',
  password_min: 6,
  password_max: 20,
};

Sentry.init({
  dsn: sentryConfig.dsn,
  release: sentryConfig.config.release,
});
