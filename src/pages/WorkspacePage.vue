<script setup lang="ts">
import { ref } from "vue";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Avatar,
    Badge,
    Kbd,
} from "@dlbcodes/my-design-system";
import { PhCaretUpDown, PhCheck, PhPlus, PhGear } from "@phosphor-icons/vue";

interface Workspace {
    id: string;
    name: string;
    src: string | null;
    plan: "Free" | "Pro" | "Enterprise";
}

const workspaces: Workspace[] = [
    { id: "1", name: "Acme Inc", src: null, plan: "Enterprise" },
    { id: "2", name: "Personal", src: null, plan: "Free" },
    { id: "3", name: "Side Project", src: null, plan: "Pro" },
];

const activeId = ref("1");
const active = ref(workspaces[0]);

const select = (ws: Workspace, close: () => void): void => {
    activeId.value = ws.id;
    active.value = ws;
    close();
};

const planVariant = (
    plan: Workspace["plan"],
): "primary" | "success" | "neutral" => {
    if (plan === "Enterprise") return "primary";
    if (plan === "Pro") return "success";
    return "neutral";
};
</script>

<template>
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">
                Workspace switcher
            </h1>
            <p class="mt-1 text-sm text-text-secondary">
                A popover that combines Avatar, Badge, and keyboard hints.
            </p>
        </div>

        <!-- The switcher -->
        <Popover placement="bottom-start">
            <PopoverTrigger>
                <div
                    class="flex items-center w-64 justify-between bg-bg-raised p-4 border border-border-subtle rounded-2xl transition-colors hover:border-border-strong"
                >
                    <span class="flex items-center gap-3 min-w-0">
                        <Avatar
                            :name="active.name"
                            :src="active.src"
                            size="lg"
                        />
                        <span
                            class="flex flex-col items-start min-w-0 text-left"
                        >
                            <span
                                class="text-sm truncate font-medium text-text-primary"
                            >
                                {{ active.name }}
                            </span>
                            <span class="truncate text-sm text-text-tertiary">
                                {{ active.plan }} plan
                            </span>
                        </span>
                    </span>
                    <PhCaretUpDown class="size-4 shrink-0 text-text-tertiary" />
                </div>
            </PopoverTrigger>

            <PopoverContent size="sm">
                <template #default="{ close }">
                    <div class="flex flex-col gap-0.5 p-1">
                        <p
                            class="px-2 py-1.5 text-xs font-medium text-text-tertiary"
                        >
                            Workspaces
                        </p>

                        <button
                            v-for="(ws, i) in workspaces"
                            :key="ws.id"
                            type="button"
                            class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left transition-colors hover:bg-bg-surface"
                            @click="select(ws, close)"
                        >
                            <Avatar :name="ws.name" :src="ws.src" size="sm" />
                            <span
                                class="flex-1 truncate text-sm font-medium text-text-primary"
                            >
                                {{ ws.name }}
                            </span>
                            <Badge :variant="planVariant(ws.plan)">{{
                                ws.plan
                            }}</Badge>
                            <PhCheck
                                v-if="ws.id === activeId"
                                class="size-4 text-accent-pro-200"
                            />
                            <Kbd v-else>⌘{{ i + 1 }}</Kbd>
                        </button>

                        <div class="my-1 h-px bg-border-subtle"></div>

                        <button
                            type="button"
                            class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-bg-surface"
                            @click="close"
                        >
                            <PhPlus class="size-4" />
                            Create workspace
                        </button>
                        <button
                            type="button"
                            class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-bg-surface"
                            @click="close"
                        >
                            <PhGear class="size-4" />
                            Workspace settings
                        </button>
                    </div>
                </template>
            </PopoverContent>
        </Popover>
    </div>
</template>
