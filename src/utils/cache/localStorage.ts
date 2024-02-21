/** localStorage类型 */
export const enum LS_NAME {
  common = 'common',
}

/**
 * localStorage设置值
 * @param name
 * @param value
 * @constructor
 */
export function LS_setValue(name: LS_NAME, value: any) {
  if (value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(name, value);
  } else {
    localStorage.setItem(name, '');
  }
};

/**
 * localStorage获取某个值
 * @param name
 * @constructor
 */
export function LS_getValue(name: LS_NAME) {
  const value = localStorage.getItem(name);
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
 * localStorage删除某个值
 * @param name
 * @constructor
 */
export function LS_deleteValue(name: LS_NAME) {
  localStorage.removeItem(name);
};

/**
 * localStorage设置对象里的某个值
 * @param name
 * @param key
 * @param value
 * @constructor
 */
// 设置对象里的某个值
export function LS_setKeyValue(name: LS_NAME, key: string, value: any) {
  let localData = LS_getValue(name);
  if (!localData || typeof localData !== 'object') {
    localData = {};
  }
  localData[key] = value;
  LS_setValue(name, localData);
};

/**
 * localStorage获取对象里的某个值
 * @param name
 * @param key
 * @constructor
 */
export function LS_getKeyValue(name: LS_NAME, key: string) {
  let localData = LS_getValue(name);
  if (!localData || typeof localData !== 'object') {
    localData = {};
  }
  return localData[key];
};