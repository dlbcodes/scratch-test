<script setup lang="ts">
import {
    Panel,
    PanelHeader,
    PanelContent,
    PanelFooter,
    Badge,
    Button,
    Avatar,
} from "my-design-system";
import { PhTrendUp, PhTrendDown, PhArrowRight } from "@phosphor-icons/vue";

const stats = [
    { label: "Total revenue", value: "$48,200", delta: "+12.5%", up: true },
    { label: "Active users", value: "2,340", delta: "+4.1%", up: true },
    { label: "Churn rate", value: "1.8%", delta: "-0.4%", up: false },
];

const activity = [
    {
        name: "Ana Silva",
        img: "https://i.pravatar.cc/120?img=2",
        action: "created a new project",
        time: "2m ago",
    },
    {
        name: "John Carter",
        img: "https://i.pravatar.cc/120?img=6",
        action: "invited a team member",
        time: "1h ago",
    },
    {
        name: "Daniel Lobo",
        img: "https://i.pravatar.cc/120?img=3",
        action: "updated billing settings",
        time: "3h ago",
    },
];
</script>

<template>
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">Dashboard</h1>
            <p class="mt-1 text-sm text-text-secondary">
                An overview of your workspace.
            </p>
        </div>

        <!-- Stat cards -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Panel v-for="s in stats" :key="s.label">
                <PanelContent class="p-4">
                    <p class="text-sm text-text-secondary">{{ s.label }}</p>
                    <p class="mt-1 text-2xl font-semibold text-text-primary">
                        {{ s.value }}
                    </p>
                    <div class="mt-2 flex items-center gap-1">
                        <Badge :variant="s.up ? 'success' : 'destructive'">
                            <PhTrendUp v-if="s.up" class="size-3" />
                            <PhTrendDown v-else class="size-3" />
                            {{ s.delta }}
                        </Badge>
                        <span class="text-xs text-text-tertiary">
                            vs last month
                        </span>
                    </div>
                </PanelContent>
            </Panel>
        </div>

        <!-- Recent activity -->
        <Panel>
            <PanelHeader>
                <h2 class="text-lg font-medium text-text-primary">
                    Recent activity
                </h2>
            </PanelHeader>
            <PanelContent class="px-4 py-6">
                <div class="flex flex-col gap-3">
                    <div
                        v-for="(a, i) in activity"
                        :key="i"
                        class="flex items-center gap-3"
                    >
                        <Avatar :src="a.img" :name="a.name" size="sm" />
                        <p
                            class="flex items gap-x-1 flex-1 text-sm text-text-primary"
                        >
                            <span class="font-medium">{{ a.name }}</span>
                            <span class="text-text-secondary">
                                {{ a.action }}</span
                            >
                        </p>
                        <span class="text-xs text-text-tertiary">{{
                            a.time
                        }}</span>
                    </div>
                </div>
            </PanelContent>
            <PanelFooter>
                <Button variant="ghost" size="sm">
                    View all activity
                    <PhArrowRight class="size-4" />
                </Button>
            </PanelFooter>
        </Panel>
    </div>
</template>
