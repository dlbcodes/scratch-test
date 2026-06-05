<script setup lang="ts">
import { pages } from "../registry";
</script>

<template>
    <div class="flex flex-col gap-8">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">
                Design system demo
            </h1>
            <p class="mt-1 text-sm text-text-secondary">
                {{ pages.length }} example pages built with the component
                library.
            </p>
        </div>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <RouterLink
                v-for="p in pages"
                :key="p.slug"
                :to="`/${p.slug}`"
                class="flex flex-col gap-1 rounded-2xl border border-border-subtle bg-bg-raised p-4 transition-colors hover:border-border-strong hover:bg-bg-surface"
            >
                <span class="font-medium text-text-primary">{{ p.name }}</span>
                <span class="text-sm text-text-secondary">{{
                    p.description
                }}</span>
            </RouterLink>
        </div>
    </div>
</template>
