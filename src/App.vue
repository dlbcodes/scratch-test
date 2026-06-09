<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Button } from "@dlbcodes/my-design-system";
import { PhArrowLeft } from "@phosphor-icons/vue";

const route = useRoute();
const isHome = computed(() => route.path === "/");
const isFullscreen = computed(() => route.meta.fullscreen === true);
</script>

<template>
    <!-- Fullscreen routes (e.g. the dashboard demo): no app chrome -->
    <router-view v-if="isFullscreen" />

    <!-- Normal layout: centered content + back-to-home footer -->
    <div v-else class="flex min-h-screen flex-col bg-bg-base">
        <main class="mx-auto w-full max-w-3xl flex-1 p-6">
            <router-view />
        </main>

        <footer
            v-if="!isHome"
            class="sticky bottom-0 border-t border-border-subtle bg-bg-raised/80 px-6 py-3 backdrop-blur"
        >
            <Button variant="ghost" size="sm" to="/">
                <PhArrowLeft class="size-4" />
                Back to home
            </Button>
        </footer>
    </div>
</template>
