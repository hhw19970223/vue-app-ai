import mitt, { Emitter } from 'mitt';

export const enum EVENT_MITT {
  test ='mitt_test',
  err = 'mitt_err',
  success = 'mitt_succes',
  lock = 'mitt_lock',
  resize = 'mitt_resize',
}

export const enum LOCK_NAME {
  test = 'test'
}

export type EventMittType = {
  [EVENT_MITT.test]: any,
  [EVENT_MITT.err]: string,
  [EVENT_MITT.success]: void,
  [EVENT_MITT.lock]: LOCK_NAME,
  [EVENT_MITT.resize]: void,
}

/** 全局事件中心 */
export const gMitt: Emitter<EventMittType> = mitt<EventMittType>();