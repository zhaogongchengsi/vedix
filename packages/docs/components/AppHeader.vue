<script setup lang="ts">
import HeaderNavigation from "~/components/HeaderNavigation.vue";

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
      <div class="col-span-4 lg:hidden flex items-center justify-center">
        <AppHeaderLogo v-if="hasDialog" class="block! lg:hidden!" />
      </div>
      <div class="col-span-4 lg:col-span-8 flex items-center justify-end gap-1">
        <HeaderNavigation class="hidden lg:block" />
        <AppDocSearch v-if="hasDocSearch" />
        <AppSearch
          v-else
          :fuse="config.fuse"
        />
        <ThemeSelect />
        <div class="flex items-center">
          <AppSocialIcons />
        </div>
        <button class="p-3 text-[var(--color-gray-200)] flex justify-center items-center lg:hidden" aria-label="Nav Menu">
          <Icon class="text-5" name="tabler:menu-2" />
        </button>
      </div>
    </Container>
  </header>
</template>

