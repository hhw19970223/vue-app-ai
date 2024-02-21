import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useCartStore = defineStore('usr', () => {
  const count = ref(0)
  async function updateCart() {
    const data = [];
    count.value = data.length
  }

  return { count, updateCart }
})
