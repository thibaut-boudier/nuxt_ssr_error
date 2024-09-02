<template>
  <div>Path is : {{ elem }} or {{ route.params.id }}</div>
</template>

<script setup>
const { ssrContext, payload } = useNuxtApp();
const elem = ref('');
const route = useRoute();

if (
  ssrContext &&
  ssrContext.payload &&
  ssrContext.payload.data &&
  ssrContext.payload.data.ssrPath
) {
  elem.value = ssrContext.payload.data.ssrPath;
} else {
  elem.value = payload.data.ssrPath;
}
</script>
