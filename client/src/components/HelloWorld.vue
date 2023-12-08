<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import HttpClient from "../libs/HttpClient";

let message: Ref<string> = ref("");

onMounted(async ()=> {
  message.value = "hello!";

  let httpCient = HttpClient.Builder();
  let response = await httpCient.setPath("/foo").call();
  let text = await response.text();
  message.value = text;
})

</script>

<style scoped>
.hello {
  padding: 20px;
}
</style>
