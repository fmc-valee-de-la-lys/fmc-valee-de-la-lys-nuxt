<script setup lang="ts">
import type Tag from '~~/types/Tag';

const config = useAppConfig();
const navigation = [
  {
    title: "Blog", links: [{ title: "Articles", link: "/blog" }],
  },
];
</script>

<template>
  <footer class="border-t dark:border-gray-600 font-display" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl lg:px-2 lg:pt-12">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <AppLogo />
        </div>
      </div>
      <div class="mt-2 border-t border-gray-900/10 dark:border-gray-600 pt-8">
        <p class="text-xs leading-5 text-gray-500">&copy; {{ new Date().getFullYear() }} {{ config.general.title }} All
          rights
          reserved.</p>
      </div>
    </div>
  </footer>
</template>