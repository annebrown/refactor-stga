<!--------@/components/content/CodeCollapse------------------------------------>
<!-- 

Usage:

<--------Markdown File----------------------------------------------------------
# Code Collapse MDC

::code-collapse

```bash
cd
ln -S
less R<tab>
```

::

<--------Markdown File----------------------------------------------------------
-->
 
<template>
    <div class="code-collapse">
      <div class="content" :class="{ 'collapsed': !isOpen }">
        <slot />
      </div>
      <button @click="isOpen = !isOpen" class="toggle-button">
        {{ isOpen ? 'Collapse' : 'Expand' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  </script>
  
  <style scoped>
  .code-collapse {
    position: relative;
    margin: 1rem 0;
  }
  .content.collapsed {
    max-height: 200px;
    overflow: hidden;
  }
  .toggle-button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    background: #f1f1f1;
    border: 1px solid #ddd;
    border-top: none;
    cursor: pointer;
    text-align: center;
  }
  </style>