<script setup lang="ts">
import tabs from './tabs.vue'
import tabsList from './tabs-list.vue'
import tabsTrigger from './tabs-trigger.vue'
import tabsContent from './tabs-content.vue'
</script>

<template>
  <div class="w-1/2 mx-auto my-3">
    <tabs default-value="account">
      <tabs-list>
        <tabs-trigger value="account">
          Account
        </tabs-trigger>
        <tabs-trigger value="password">
          Password
        </tabs-trigger>
      </tabs-list>
      <tabs-content value="account">
        Account
      </tabs-content>
      <tabs-content value="password">
        Password
      </tabs-content>
    </tabs>
  </div>
</template>

<style scoped>

</style>
