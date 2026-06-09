<script setup lang="ts">
import { pages } from "../registry";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsPanels,
    TabsContent,
} from "@dlbcodes/my-design-system";

// Full-screen demos aren't registry pages (they're takeover routes),
// so list them here.
const fullscreenDemos = [
    {
        slug: "dashboard-demo",
        name: "Dashboard",
        description: "A full-screen dashboard with a responsive sidebar.",
    },
    {
        slug: "chat-demo",
        name: "AI Chat",
        description:
            "A chat interface — sidebar history, messages, and a composer.",
    },
    {
        slug: "settings-demo",
        name: "Settings",
        description: "An account settings page with tabbed sections and forms.",
    },
];
</script>

<template>
    <div class="flex flex-col gap-8">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">
                Design system demo
            </h1>
            <p class="mt-1 text-sm text-text-secondary">
                Example pages and full-screen demos built with the component
                library.
            </p>
        </div>

        <Tabs>
            <TabsList>
                <TabsTrigger>Pages ({{ pages.length }})</TabsTrigger>
                <TabsTrigger
                    >Full-screen ({{ fullscreenDemos.length }})</TabsTrigger
                >
            </TabsList>

            <TabsPanels>
                <!-- In-layout example pages -->
                <TabsContent>
                    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <RouterLink
                            v-for="p in pages"
                            :key="p.slug"
                            :to="`/${p.slug}`"
                            class="flex flex-col gap-1 rounded-2xl border border-border-subtle bg-bg-raised p-4 transition-colors hover:border-border-strong hover:bg-bg-surface"
                        >
                            <span class="font-medium text-text-primary">{{
                                p.name
                            }}</span>
                            <span class="text-sm text-text-secondary">{{
                                p.description
                            }}</span>
                        </RouterLink>
                    </div>
                </TabsContent>

                <!-- Full-screen takeover demos -->
                <TabsContent>
                    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <RouterLink
                            v-for="demo in fullscreenDemos"
                            :key="demo.slug"
                            :to="`/${demo.slug}`"
                            class="flex flex-col gap-1 rounded-2xl border border-border-subtle bg-bg-raised p-4 transition-colors hover:border-border-strong hover:bg-bg-surface"
                        >
                            <span class="font-medium text-text-primary">{{
                                demo.name
                            }}</span>
                            <span class="text-sm text-text-secondary">{{
                                demo.description
                            }}</span>
                        </RouterLink>
                    </div>
                </TabsContent>
            </TabsPanels>
        </Tabs>
    </div>
</template>
