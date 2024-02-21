/**
 * https://socket.io/docs/v4/client-options/
 */
import { Socket, io } from 'socket.io-client';
import { EVENT_MITT, gMitt } from '../event/gMitt';
import { encrypt } from '../secret/crypto';

// gMitt.on(EVENT_MITT.err, (mess) => {});

export let webSocket: Socket;
let connecting = false; //与服务端连接状态
let connect_num = 0; //连接次数

/**
 * 建立socket连接
 * @param userInfo {"userid":"HuangHeWen","name":"黄河文","position":"开发测试","status":1}
 */
export function bulidSocket(userInfo: any) {
  if (!userInfo || !userInfo.userid) {
    console.error('身份确实无法建立连接');
    return;
  }

  if (connecting == true) {
    console.log('socket已连接无需重新连接');
    return;
  }

  if (webSocket) {
    connect_num = 0;
    webSocket.open(); // 手动重连
    return;
  }

  let url = `${import.meta.env.VITE_HOST_WS}`;
  webSocket = io(url, {
    reconnection: false,
    query: {
      userInfo: encrypt(userInfo, 'userInfo'),
    },
    // autoConnect: false,
  });

  // 连接成功
  webSocket.on('connect', webSocketOnOpen);
  // 断开连接
  webSocket.on('disconnect', reconnect);
  // 错误
  webSocket.on('error', reconnect);
  // 连接错误
  webSocket.on('connect_error', reconnect);
  // 重连成功
  webSocket.on('reconnect', webSocketOnOpen);
  // 重连尝试错误
  webSocket.on('reconnect_error', reconnect);

  webSocket.on('message', webSocketOnMessage);
}

/** socket重连 */
function reconnect() {
  connecting = false;
  setTimeout(() => {
    if (connect_num < 5) {
      connect_num++;
      console.error('socket重连' + connect_num + '次');
      webSocket.connect(); // 手动重连
    } else {
      console.error('socket重连失败即将关闭');
      webSocket.close();
    }
  }, 1000);
}

/** socket连接成功 */
function webSocketOnOpen() {
  connecting = true;
  console.log('socket连接成功');
  gMitt.emit(EVENT_MITT.success); //通知主界面webSock连接成功
}
// 获取到后台消息的事件，操作数据的代码在onmessage中书写
function webSocketOnMessage(data: any) {
  // res就是后台实时传过来的数据
  if (data) {
    try {
      data = JSON.parse(data);
      for (let key in data) {
        gMitt.emit(key as EVENT_MITT, data[key]);
      }
    } catch (e) {
      console.log(e);
      console.log(data);
    }
  }
}

/** 发送请求 */
export function webSocketSend(params: any, cb?: (response: any) => void) {
  if (!params) return;
  if (!webSocket) return;
  if (!connecting) {
    return;
  }
  if (typeof params != 'object') {
    webSocket.emit('message', JSON.stringify({ msg: params }), cb);
  } else {
    webSocket.emit('message', JSON.stringify(params), cb);
  }
}

//模块请求
export function wsReq(
  module: string,
  method: string,
  args: any,
  cb?: (response: any) => void,
) {
  let params = {
    module,
    method,
    args,
  };
  webSocketSend(params, cb);
}
