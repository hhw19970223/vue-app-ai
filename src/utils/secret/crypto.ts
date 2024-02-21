import CryptoJS from 'crypto-js';

export function encrypt(
  word: string | object,
  crypto_key?: string,
  crypto_iv?: string,
) {
  let key = CryptoJS.enc.Utf8.parse(crypto_key || 'hhw');
  let iv = CryptoJS.enc.Utf8.parse(crypto_iv || 'hhw');
  let encrypted: any;
  if (typeof word == 'string') {
    const srcs = CryptoJS.enc.Utf8.parse(word);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  } else if (typeof word == 'object') {
    //对象格式的转成json字符串
    const data = JSON.stringify(word);
    const srcs = CryptoJS.enc.Utf8.parse(data);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  }
  return encrypted.ciphertext.toString();
}
// aes解密
export function decrypt(
  word: string,
  crypto_key?: string,
  crypto_iv?: string,
): string {
  let key = CryptoJS.enc.Utf8.parse(crypto_key || 'hhw');
  let iv = CryptoJS.enc.Utf8.parse(crypto_iv || 'hhw');
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

// aes解密
export function decryptToObj(
  word: string,
  crypto_key?: string,
  crypto_iv?: string,
): any {
  return JSON.parse(decrypt(word, crypto_key, crypto_iv));
}
