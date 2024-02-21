/** sessionStorage类型 */
export const enum SS_NAME {
  common = 'common',
}

/**
 * sessionStorage设置值
 * @param name
 * @param value
 * @constructor
 */
export function SS_setValue(name: SS_NAME, value: any) {
  if (value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(name, value);
  } else {
    sessionStorage.setItem(name, '');
  }
};

/**
 * sessionStorage获取某个值
 * @param name
 * @constructor
 */
export function SS_getValue(name: SS_NAME) {
  const value = sessionStorage.getItem(name);
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
 * sessionStorage删除某个值
 * @param name
 * @constructor
 */
export function SS_deleteValue(name: SS_NAME) {
  sessionStorage.removeItem(name);
};

/**
 * sessionStorage设置对象里的某个值
 * @param name
 * @param key
 * @param value
 * @constructor
 */
export function SS_setKeyValue(name: SS_NAME, key: string, value: any) {
  let sessionData = SS_getValue(name);
  if (!sessionData || typeof sessionData !== 'object') {
    sessionData = {};
  }
  sessionData[key] = value;
  SS_setValue(name, sessionData);
};

/**
 * sessionStorage获取对象里的某个值
 * @param name
 * @param key
 * @constructor
 */
export function SS_getKeyValue(name: SS_NAME, key: string) {
  let sessionData = SS_getValue(name);
  if (!sessionData || typeof sessionData !== 'object') {
    sessionData = {};
  }
  return sessionData[key];
};
