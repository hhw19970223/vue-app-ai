export const regTest = (reg: RegExp) => (value: string) => reg.test(value);
export const notRegTest = (reg: RegExp) => (value: string) => !reg.test(value);

// 正则规则
export const regRules = {
  CEN: /^[\u4E00-\u9FA5A-Za-z0-9\-\(\)]+$/,
  vpsPassword:
    /^(?!\/)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[()`~!@#$%^&*\-_+=|{}[\]:;'<>,.?\/]).{8,30}$/,
  notStartWithSlash: /^\//,
  notChinese: /^[a-zA-Z0-9()`~!@#$%^&*\-_+=|{}[\]:;'<>,.?\/]{0,}$/,
  IPv4: /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,
  domain:
    /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,
  phone: /^1\d{10}$|^\+\d{7,20}$/,
  mobileTerminal: /Android|webOS|iPhone|iPod|iPad|BlackBerry|Windows Phone/i,
  innerNetwork: /^(10\.0|127\.|192\.168\.|172\.16\.)/,
  password:
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|\-=?;:'",.<>\/\[\]{}]).{6,24}$/,
  emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  specialWordRegex: /[`~!@#$%^&*()_\+=<>?:"{}|,.\/;\\[\]·~！@#￥%……&*（）——\+={}|《》？：“”【】、；‘，。、]/im,
  number: /[0-9]/,
  onlyNumber: /^[0-9]+$/
};

/**
 * 匹配中文、英文大小写字母、数字
 * @param value
 * @param min 长度最小值，可不传，默认为1
 * @param max 长度最大值，如果不限长度，直接不传
 * @returns
 */
export const testCEN = (value: string, min: number, max: number) => {
  if (value == null || value.length < min || value.length > max) {
    return false;
  }
  return regTest(regRules.CEN)(value);
};

// 正则 不能以斜线号（/）为密码首字符
export const testStartWithSlash = regTest(regRules.notStartWithSlash);

// 正则 不能中文及中文字符
export const testNotChinese = notRegTest(regRules.notChinese);

/**
 * 匹配 支持长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
 * @param value
 * @param min 长度最小值，可不传，默认为8
 * @param max 长度最大值，如果不限长度，直接不传
 * @returns
 */
export const testVpsPassword = (value: string) => {
  if (value == null || value.length < 8 || value.length > 30) {
    return false;
  }
  return regTest(regRules.vpsPassword)(value);
};

/**
 * 匹配 密码为6-24位字符，英文、符号、数字，该输入框最多只允许输入24位
 * @param value
 * @returns
 */
export const testPassword = (value: string) => {
  if (value == null || value.length < 6 || value.length > 24) {
    return false;
  }
  return regTest(regRules.password)(value);
};

/** 匹配IPv4 */
export const testIP = regTest(regRules.IPv4);

/** 匹配 domain  */
export const testDomain = regTest(regRules.domain);

/** 1开头 + 后面10位数数字 */
export const testPhone = regTest(regRules.phone);

/** 验证邮箱 */
export const testEmail = ((value: string) => {
  if (!value || value.length > 256) {
    return false;
  }
  return regTest(regRules.emailRegex)(value)
});

/** 验证账号名 */
export const testAccount = (value: string) => {
  if (!value || value.length > 20) {
    return false;
  }
  return !regTest(regRules.specialWordRegex)(value)
}

/** 验证是否有特殊字符 */
export const testSpecialWord = (value: string) => {
  return !regTest(regRules.specialWordRegex)(value)
}

/** 验证是否有数字 */
export const testNoNumber = (value: string) => {
  return !regTest(regRules.number)(value)
}

/** 验证只有数字 */
export const testOnlyNumber = (value: string) => {
  return regTest(regRules.onlyNumber)(value)
}

/** 判断是否是pc端 */
export const testPC = notRegTest(regRules.mobileTerminal);
/** 判断是否是移动端 */
export const testMobileTerminal = regTest(regRules.mobileTerminal);

/** 匹配 内外地址 */
export const testInnerNetwork = regTest(regRules.innerNetwork);
