<template>
    <div class="code-block-container">
      <pre><code class="language-javascript">{{ visibleCode }}</code></pre>
      <button class="show-more-button" @click="toggleCode">{{ buttonText }}</button>
      <pre v-if="showFullCode"><code class="language-javascript">{{ hiddenCode }}</code></pre>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    visibleCode: {
      type: String,
      required: true,
    },
    hiddenCode: {
      type: String,
      required: true,
    },
  });
  
  const showFullCode = ref(false);
  const buttonText = ref('More...');
  
  const toggleCode = () => {
    showFullCode.value = !showFullCode.value;
    buttonText.value = showFullCode.value ? 'Less...' : 'More...';
  };
  </script>
  
  <style scoped>
  .show-more-button {
    cursor: pointer;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 4px;
  }
  
  .code-block-container {
    position: relative;
  }
  </style>