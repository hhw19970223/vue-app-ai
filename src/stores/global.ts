import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', () => {
  const isMobile = ref(false);

  function updateType(_isMobile: boolean) {
    isMobile.value = _isMobile;
  }

  return { isMobile, updateType }
})
