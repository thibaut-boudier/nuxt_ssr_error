export default defineNuxtRouteMiddleware((to) => {
  const { ssrContext } = useNuxtApp();
  if (ssrContext && ssrContext.payload && ssrContext.payload.data) {
    ssrContext.payload.data.ssrPath = to.path;
  }
});
