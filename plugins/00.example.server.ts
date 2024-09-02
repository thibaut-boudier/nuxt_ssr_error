import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin({
  name: 'example',
  async setup() {
    if (process.server) {
      const res = await useFetch('http://www.randomnumberapi.com/api/v1.0/random')
      const title = res.data.value[0]
      await new Promise(r => setTimeout(r, 1000));
      useServerHead({
        title
      });
    }
  },
});
