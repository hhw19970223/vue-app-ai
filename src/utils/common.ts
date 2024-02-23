import { ResponseError } from "./request/axios";

export type PromiseResponseError<T = any, U = Error & ResponseError> =
  | [U, undefined]
  | [null, T];
export function to<T = any, U = Error & ResponseError>(
  promise: Promise<T>,
  errorExt?: object
): Promise<PromiseResponseError<T, U>> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }
      return [err, undefined];
    });
}

/**
 * 获取设备类型
 */
export function getPlatform() {
  const userAgent = navigator.userAgent.toLocaleLowerCase();
  if (userAgent.includes('windows')) return 'Windows';
  if (userAgent.includes('android')) return 'Android';
  if (userAgent.includes('iphone')) return 'iPhone';
  if (userAgent.includes('linux')) return 'Linux';
  if (userAgent.includes('ipad')) return 'iPad';
  if (
    navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 2 &&
    /MacIntel/.test(navigator.platform)
  )
    return 'iPad';
  if (userAgent.includes('mac os x')) return 'OSX';
  return 'unknown';
}

/**
 * 判断是否是移动端
 * @returns
 */
export function isMobile(): boolean {
  const flag =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const isIpadOS =
    navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 2 &&
    /MacIntel/.test(navigator.platform);
  return !!flag || !!isIpadOS;
}

/**
 * 延迟函数
 * @param time
 */
export function delay(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

/**
 * 复制到剪切板
 * @param text
 */
export async function setClipboardText(text: string) {
  await navigator.clipboard.writeText(text || '');
  return;
}

/**
 * 获取剪贴板文本
 */
export async function getClipboardText() {
  const clipedText = await navigator.clipboard.readText();
  return clipedText;
}