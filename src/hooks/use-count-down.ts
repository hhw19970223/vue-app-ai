
export function useCountDown(initTiming = 60) {
  const time = ref(0);
  let tickTimer: NodeJS.Timeout | string | number | undefined;
  
  watch(() => time.value, (newV: number) => {

    if (tickTimer) {
      clearTimeout(tickTimer);
    }

    if (newV > 0) {
      tickTimer = setTimeout(() => {
        time.value = time.value - 1
      }, 1000);
    }
  })

  onUnmounted(() => {
    if (tickTimer) {
      clearTimeout(tickTimer);
    }
  });

  function startTick(countDownTiming?: number) {
    let timing = countDownTiming;
    if (!timing) {
      timing = initTiming;
    }

    if (timing > 0) {
      if (tickTimer) {
        clearTimeout(tickTimer);
      }
      time.value = timing;
    }
  };

  return [time, startTick];
}
