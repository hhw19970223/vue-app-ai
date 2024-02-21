import { TIME } from "../../const/common";
// import { broadcastChannel } from "../event/broadcastChannel";
import { EVENT_MITT, LOCK_NAME, gMitt } from "../event/gMitt";

/** 锁 */
export class CLock {
  /** 间隔时间 */
  private _interval_duration: number;
  /** 订阅时间 */
  private _sub_map: {[key: string]: NodeJS.Timeout};
  /** 发布时间 */
  private _leader_map: {[key: string]: NodeJS.Timeout};
  /** 释放锁 */
  private _release_map: {[key: string]: () => void};

  constructor() {
    this._interval_duration = TIME.second_thirty;//间隔时间
    this._sub_map = {};
    this._leader_map = {};
    this._release_map = {};

    const self = this;
    gMitt.on(EVENT_MITT.lock, (e) => {
      self._onMessage(e);
    });  
  }

  private _onMessage(name: LOCK_NAME) {
    if (this._leader_map[name]) {//被人抢锁了
      this._leave(name);

      this._sub_map[name] = setTimeout(() => {
        this._lock(name);
      }, this._interval_duration * 2);
    }

    if (this._sub_map[name]) {
      clearTimeout(this._sub_map[name]);
      this._sub_map[name] = setTimeout(() => {
        this._lock(name);
      }, this._interval_duration * 2);
    }
  }

  /**
   * 订阅
   * @param name 
   */
  public subscribe(name: LOCK_NAME) {
    if (!this._sub_map[name]) {
      this._sub_map[name] = setTimeout(() => {
        this._lock(name);
      }, this._interval_duration * 2);
    }
  }

  /**
   * 取消订阅和发布
   * @param name 
   */
  public unSubscribe(name: LOCK_NAME | '*') {
    if (name === '*') {
      for (const key in this._sub_map) {
        clearTimeout(this._sub_map[key]);
        delete this._sub_map[key];
      }
      for (const key in this._leader_map) {
        this._leave(key as LOCK_NAME);
      }
    } else {
      if (this._sub_map[name]) {
        clearTimeout(this._sub_map[name]);
        delete this._sub_map[name];
      }
      if (this._leader_map[name]) {
        this._leave(name);
      }
    }
  }

  /**
   * 抢锁处理
   * @param name
   */
  private async _lock(name: LOCK_NAME) {
    // const self = this;
    // function focus(name: LOCK_NAME, cb: () => void) {

    //   navigator.locks?.request?.(name, async (lock: Lock | null) => {
    //     cb?.();

    //     return new Promise((res: any, rej) => {
    //       self._release_map[name] = res;
    //       self._publish(name);
    //     })
    //   })
    // }

    switch(name) {
      
    }
  }

  // /**
  //  * 成为领导者处理
  //  * @param name
  //  */
  // private _publish(name: LOCK_NAME) {
  //   if (this._sub_map[name]) {
  //     clearTimeout(this._sub_map[name]);
  //     delete this._sub_map[name];
  //   }

  //   broadcastChannel(EVENT_MITT.lock, name);//先广播一次

  //   if (this._leader_map[name]) {
  //     clearInterval(this._leader_map[name]);
  //   }

  //   this._leader_map[name] = setInterval(() => {
  //     broadcastChannel(EVENT_MITT.lock, name);
  //   }, this._interval_duration);
  // }

  /**
   * 退任领导者
   * @param name
   */
  private _leave(name: LOCK_NAME) {
    if (this._leader_map[name]) {
      clearInterval(this._leader_map[name]);
      delete this._leader_map[name];
    }

    if (this._release_map[name]) {
      this._release_map[name]();//释放锁
      delete this._release_map[name];
    }
  } 
}

export const cLock = new CLock()