import { EVENT_MITT, gMitt } from "./gMitt";

const channel: BroadcastChannel | null = BroadcastChannel ? new BroadcastChannel(import.meta.env.VITE_SECRET) : null;

export function broadcastChannel(type: EVENT_MITT, _data: any = '') {
  const data: any = {};
  data.data = {};
  data.data[type] = _data;
  channel?.postMessage(data);
}   

export function onMessOnBroadcastChannel() {
  if (channel) {
    channel.onmessage = (e) => {
      const data = e.data;
      if (data.data) {
        for (const key in data.data) {
          const _data = data.data[key];
          gMitt.emit(key as EVENT_MITT, _data);
        }
      }
    }
  }
}

  