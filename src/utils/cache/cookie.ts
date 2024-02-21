import CookieTool from 'js-cookie';

/** cookie类型 */
export const enum C_NAME {
  common = 'common',
}
export function getDomain() {
  const hostNames = location.hostname.split('.');
  const domain =
    hostNames?.length === 3
      ? `.${ hostNames[1] }.${ hostNames[2] }`
      : location.hostname;
  return domain;
};

/**
 * cookie设置
 * @param name
 * @param value
 * @param options
 * @constructor
 */
export function C_setValue(name: C_NAME, value: string | object, options?: Cookies.CookieAttributes) {
  const domain = getDomain();
  if (value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
  } else {
    value = '';
  }

  CookieTool.set(name, value, {
    expires: 7,
    domain,
    path: '/',
    ...options,
  });
};

/**
 * cookie获取
 * @param name
 * @constructor
 */
export function C_getValue(name: C_NAME) {
  const value = CookieTool.get(name);
  if (!value) {
    return value;
  }
  try {
    return JSON.parse(value as string);
  } catch (e) {
    return value;
  }
};

/**
 * cookie删除
 * @param name
 * @constructor
 */
export function C_deleteValue(name: C_NAME, options?: Cookies.CookieAttributes) {
  const domain = getDomain();
  CookieTool.remove(name, {
    domain,
    path: '/',
    ...options
  });
};