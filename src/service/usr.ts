import { TIME } from "../const/common";
import { API_PREFIX, createHttpClient } from "../utils/request/axios";

/** 用户实例 */
export const httpUsr = createHttpClient(API_PREFIX.usr, TIME.second_thirty, {});

export function test(): Promise<void> {
  return httpUsr.get('/test');
};