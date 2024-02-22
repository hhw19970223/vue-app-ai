export const useScript = (url: string, onload: () => void) => {

  let script: HTMLScriptElement;

  onMounted(() => {
    script = document.createElement('script');

    script.src = url;
    script.onload = onload;

    document.head.appendChild(script);
  })

  onUnmounted(() => {
    if (script) document.head.removeChild(script);
  })
};
