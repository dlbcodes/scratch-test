<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Button } from "@dlbcodes/my-design-system";
import { PhArrowLeft } from "@phosphor-icons/vue";
import { pages } from "./registry";

const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>

<template>
    <div class="flex min-h-screen flex-col bg-bg-base">
        <!-- Page content -->
        <main class="mx-auto w-full max-w-3xl flex-1 p-6">
            <router-view />
        </main>

        <!-- Bottom bar: back to home (hidden on the home page itself) -->
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
