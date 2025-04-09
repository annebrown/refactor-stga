<!--------@/components/content/SeeMore.vue------------------------------------->
<!-- 

Usage:

<--------Markdown File----------------------------------------------------------
# Code Collapse MDC

::

```bash
cd
ln -S
less R<tab>
```

::

<--------Markdown File----------------------------------------------------------
-->
<template><div>
  <div class="collapsible-wrapper">
    <div :class="{ 'collapsed': !isOpen }">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
    <button @click="isOpen = !isOpen" class="toggle-btn">
      {{ isOpen ? closeText : openText }}
    </button>
  </div>
</div></template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  openText: {
    type: String,
    default: 'Expand'
  },
  closeText: {
    type: String,
    default: 'Collapse'
  }
})

const isOpen = ref(false)
</script>

<style scoped>
.collapsible-wrapper {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 1rem 0;
}
.collapsed {
  max-height: 200px;
  overflow: hidden;
  position: relative;
}
.collapsed::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(transparent, white);
}
.toggle-btn {
  width: 100%;
  padding: 0.5rem;
  background: #f5f5f5;
  border-top: 1px solid #ddd;
  cursor: pointer;
}
</style>
<!--------@/components/content/SeeMore.vue------------------------------------->