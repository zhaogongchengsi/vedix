<script setup lang="ts">
const { config } = useDocus()
const { navigation } = useContent()
const { hasDocSearch } = useDocSearch()
const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)

</script>

<template>
  <header :class="{ 'has-dialog': hasDialog }" class="sticky top-0 left-0 w-full z-10 h-[var(--docus-header-height)] bg-[var(--elements-backdrop-background)] backdrop-blur-[var(--elements-backdrop-filter)]">
    <Container :fluid="config?.header?.fluid" class="grid grid-cols-12 h-full">
      <div class="col-span-4 flex items-center justify-start">
        <AppHeaderDialog v-if="hasDialog" />
        <AppHeaderLogo class="hidden! lg:block!" />
      </div>
      <div class="col-span-4 flex items-center justify-center">
        <AppHeaderLogo v-if="hasDialog" class="block! lg:hidden!" />
        <AppHeaderNavigation />
      </div>
      <div class="col-span-4 flex items-center justify-end gap-1">
        <AppDocSearch v-if="hasDocSearch" />
        <AppSearch
          v-else
          :fuse="config.fuse"
        />
        <ThemeSelect />
        <div class="flex items-center">
          <AppSocialIcons />
        </div>
      </div>
    </Container>
  </header>
</template>

