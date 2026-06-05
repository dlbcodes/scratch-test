<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useMagicKeys, whenever } from "@vueuse/core";
import {
    Modal,
    ModalContent,
    Input,
    Kbd,
    Spinner,
    Button,
} from "my-design-system";
import { PhMagnifyingGlass } from "@phosphor-icons/vue";

const open = ref(false);
const query = ref("");
const loading = ref(false);

// ⌘K (Mac) / Ctrl+K (Windows/Linux) toggles the palette.
const keys = useMagicKeys({
    passive: false,
    onEventFired(e) {
        // Prevent the browser's default for Cmd/Ctrl+K (some browsers focus the URL bar)
        if (e.key === "k" && (e.metaKey || e.ctrlKey) && e.type === "keydown") {
            e.preventDefault();
        }
    },
});

whenever(keys["Meta+k"], () => (open.value = true));
whenever(keys["Ctrl+k"], () => (open.value = true));

const commands = [
    "Create new project",
    "Open settings",
    "Invite team member",
    "Search documents",
    "Toggle dark mode",
    "View profile",
];

const results = computed(() =>
    query.value.trim()
        ? commands.filter((c) =>
              c.toLowerCase().includes(query.value.toLowerCase()),
          )
        : commands,
);

watch(query, () => {
    loading.value = true;
    setTimeout(() => (loading.value = false), 350);
});
</script>

<template>
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">
                Command palette
            </h1>
            <p class="mt-1 text-sm text-text-secondary">
                A searchable command menu in a modal.
            </p>
        </div>

        <Button variant="outline" @click="open = true">
            <PhMagnifyingGlass class="size-4" />
            Search commands
            <span class="ml-2 flex items-center gap-1">
                <Kbd>⌘</Kbd><Kbd>K</Kbd>
            </span>
        </Button>

        <Modal v-model="open" size="lg">
            <div
                class="flex items-center gap-2 border-b border-border-subtle px-4 py-3"
            >
                <PhMagnifyingGlass class="size-5 text-text-tertiary" />
                <Input
                    v-model="query"
                    placeholder="Type a command…"
                    class="border-0 shadow-none"
                />
                <Spinner v-if="loading" class="size-4" />
            </div>
            <ModalContent>
                <ul class="flex flex-col gap-1">
                    <li
                        v-for="cmd in results"
                        :key="cmd"
                        class="cursor-pointer rounded-lg px-3 py-2 text-sm text-text-primary hover:bg-bg-surface"
                    >
                        {{ cmd }}
                    </li>
                    <li
                        v-if="results.length === 0"
                        class="px-3 py-6 text-center text-sm text-text-tertiary"
                    >
                        No commands found.
                    </li>
                </ul>
            </ModalContent>
        </Modal>
    </div>
</template>
