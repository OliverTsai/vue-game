import { reactive } from 'vue';

export const store = reactive({
  isMobile: window.innerWidth <= 768,
  setIsMobile(value) {
    this.isMobile = value;
  }
});