<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import {
    SidebarProvider,
    Sidebar,
    SidebarTrigger,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarItem,
    Avatar,
    Badge,
    Button,
} from "@dlbcodes/my-design-system";
import {
    PhHouse,
    PhChartBar,
    PhFolder,
    PhUsers,
    PhCreditCard,
    PhGear,
    PhBell,
    PhArrowLeft,
} from "@phosphor-icons/vue";

const active = ref("dashboard");
const go = (id: string): void => {
    active.value = id;
};

const titles: Record<string, string> = {
    dashboard: "Dashboard",
    analytics: "Analytics",
    projects: "Projects",
    team: "Team",
    billing: "Billing",
    settings: "Settings",
};
</script>

<template>
    <SidebarProvider>
        <div class="flex h-screen w-screen overflow-hidden bg-bg-base">
            <Sidebar>
                <SidebarHeader>
                    <div
                        class="flex size-8 items-center justify-center rounded-lg bg-bg-inverse text-sm font-bold text-text-inverse"
                    >
                        A
                    </div>
                    <span class="font-semibold text-text-primary"
                        >Acme Inc</span
                    >
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup label="General">
                        <SidebarItem
                            as="button"
                            :active="active === 'dashboard'"
                            @click="go('dashboard')"
                        >
                            <PhHouse /> Dashboard
                        </SidebarItem>
                        <SidebarItem
                            as="button"
                            :active="active === 'analytics'"
                            @click="go('analytics')"
                        >
                            <PhChartBar /> Analytics
                        </SidebarItem>
                        <SidebarItem
                            as="button"
                            :active="active === 'projects'"
                            @click="go('projects')"
                        >
                            <PhFolder /> Projects
                        </SidebarItem>
                    </SidebarGroup>
                    <SidebarGroup label="Workspace">
                        <SidebarItem
                            as="button"
                            :active="active === 'team'"
                            @click="go('team')"
                        >
                            <PhUsers /> Team
                        </SidebarItem>
                        <SidebarItem
                            as="button"
                            :active="active === 'billing'"
                            @click="go('billing')"
                        >
                            <PhCreditCard /> Billing
                        </SidebarItem>
                        <SidebarItem
                            as="button"
                            :active="active === 'settings'"
                            @click="go('settings')"
                        >
                            <PhGear /> Settings
                        </SidebarItem>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <button
                        type="button"
                        class="flex w-full items-center gap-2 rounded-lg p-1 text-left transition-colors hover:bg-bg-subtle"
                    >
                        <Avatar name="Daniel Lobo" :src="null" size="sm" />
                        <span
                            class="flex-1 truncate text-sm font-medium text-text-primary"
                            >Daniel Lobo</span
                        >
                    </button>
                </SidebarFooter>
            </Sidebar>

            <!-- Main -->
            <div class="flex flex-1 flex-col overflow-hidden">
                <header
                    class="flex items-center gap-3 border-b border-border-subtle bg-bg-raised px-4 py-3"
                >
                    <SidebarTrigger />
                    <h2 class="font-medium text-text-primary">
                        {{ titles[active] }}
                    </h2>
                    <div class="ml-auto flex items-center gap-3">
                        <PhBell class="size-5 text-text-tertiary" />
                        <RouterLink to="/">
                            <Button variant="secondary" size="sm">
                                <PhArrowLeft class="size-4" /> Back to showcase
                            </Button>
                        </RouterLink>
                    </div>
                </header>

                <main class="flex-1 overflow-auto p-6">
                    <div class="flex flex-col gap-6">
                        <div
                            class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            <div
                                v-for="n in 4"
                                :key="n"
                                class="rounded-xl border border-border-subtle bg-bg-surface p-5"
                            >
                                <p class="text-sm text-text-tertiary">
                                    Metric {{ n }}
                                </p>
                                <p
                                    class="mt-1 text-2xl font-semibold text-text-primary"
                                >
                                    {{ (n * 1247).toLocaleString() }}
                                </p>
                                <Badge variant="success" class="mt-2"
                                    >+{{ n * 3 }}%</Badge
                                >
                            </div>
                        </div>
                        <div
                            class="rounded-xl border border-border-subtle bg-bg-surface p-6"
                        >
                            <h3 class="font-medium text-text-primary">
                                {{ titles[active] }} overview
                            </h3>
                            <p class="mt-2 text-sm text-text-secondary">
                                This is a full-screen dashboard built entirely
                                with the design system — sidebar, header, cards,
                                and badges. Resize below 768px to see the
                                sidebar become a mobile drawer.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </SidebarProvider>
</template>
