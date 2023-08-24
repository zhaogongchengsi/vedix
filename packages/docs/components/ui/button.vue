<script lang="ts" setup>

defineOptions({
  name: 'VButton',
  inheritAttrs: true,
})

withDefaults(
  defineProps<{ variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'; size?: 'default' | 'sm' | 'lg' | 'icon' }>(),
  {
    variant: 'default',
    size: 'default',
  },
)

</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50', 
      {
        'bg-primary text-primary-foreground shadow hover:bg-primary/90': variant === 'default',
        'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90': variant === 'destructive',
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground': variant === 'outline',
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80': variant === 'secondary',
        'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
        'text-primary underline-offset-4 hover:underline': variant === 'link',
        'h-9 px-4 py-2': size === 'default',
        'h-8 rounded-md px-3 text-xs': size === 'sm',
        'h-10 rounded-md px-8': size === 'lg',
        'h-9 w-9': size === 'icon',
      }
    ]"
  >
    <slot />
  </button>
</template>
