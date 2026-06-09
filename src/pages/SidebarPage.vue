<script setup lang="ts">
import { ref } from "vue";
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
} from "@dlbcodes/my-design-system";
import {
    PhHouse,
    PhChartBar,
    PhUsers,
    PhFolder,
    PhGear,
    PhCreditCard,
    PhBell,
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
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">Sidebar</h1>
            <p class="mt-1 text-sm text-text-secondary">
                A responsive dashboard shell. Resize the window below 768px to
                see the mobile drawer.
            </p>
        </div>

        <!-- Self-contained dashboard shell -->
        <div
            class="h-[34rem] overflow-hidden rounded-2xl border border-border-subtle"
        >
            <SidebarProvider>
                <div class="flex h-full">
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
                                <Avatar
                                    name="Daniel Lobo"
                                    :src="null"
                                    size="sm"
                                />
                                <span
                                    class="flex-1 truncate text-sm font-medium text-text-primary"
                                >
                                    Daniel Lobo
                                </span>
                            </button>
                        </SidebarFooter>
                    </Sidebar>

                    <!-- Main area -->
                    <div class="flex flex-1 flex-col overflow-hidden">
                        <header
                            class="flex items-center gap-3 border-b border-border-subtle px-4 py-3"
                        >
                            <SidebarTrigger />
                            <h2 class="font-medium text-text-primary">
                                {{ titles[active] }}
                            </h2>
                            <PhBell class="ml-auto size-5 text-text-tertiary" />
                        </header>

                        <main class="flex-1 overflow-auto p-6">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm text-text-secondary">
                                    You're viewing the
                                    <span
                                        class="font-medium text-text-primary"
                                        >{{ titles[active] }}</span
                                    >
                                    section. Pick an item in the sidebar to
                                    switch.
                                </p>
                                <div
                                    class="grid grid-cols-1 gap-4 sm:grid-cols-3"
                                >
                                    <div
                                        v-for="n in 3"
                                        :key="n"
                                        class="rounded-xl border border-border-subtle bg-bg-surface p-4"
                                    >
                                        <Badge variant="neutral"
                                            >Card {{ n }}</Badge
                                        >
                                        <p
                                            class="mt-2 text-sm text-text-secondary"
                                        >
                                            Placeholder content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </SidebarProvider>
        </div>
    </div>
</template>
