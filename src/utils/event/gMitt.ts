import mitt, { Emitter } from 'mitt';

export const enum EVENT_MITT {
  test ='mitt_test',
  err = 'mitt_err',
  success = 'mitt_succes'
}



export type EventMittType = {
  [EVENT_MITT.test]: any,
  [EVENT_MITT.err]: string,
  [EVENT_MITT.success]: void
}

/** 全局事件中心 */
export const gMitt: Emitter<EventMittType> = mitt<EventMittType>();