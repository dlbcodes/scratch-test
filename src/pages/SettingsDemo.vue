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
    Panel,
    PanelContent,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsPanels,
    TabsContent,
    Disclosure,
    DisclosureTrigger,
    DisclosureContent,
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    Input,
    Switch,
    Checkbox,
    Label,
    Button,
    Separator,
    Avatar,
    Badge,
} from "@dlbcodes/my-design-system";
import {
    PhArrowLeft,
    PhHouse,
    PhChartBar,
    PhFolder,
    PhGear,
} from "@phosphor-icons/vue";

// Which app section is active in the sidebar (Settings, for this demo).
const activeNav = ref("settings");

// Profile
const name = ref("Daniel Lobo");
const email = ref("daniel@example.com");

// Security
const twoFactor = ref(true);
const sessionAlerts = ref(false);
const apiAccess = ref(false);
const betaFeatures = ref(false);

// Notifications
const emailNotifs = ref(true);
const pushNotifs = ref(false);
</script>

<template>
    <SidebarProvider>
        <div class="flex h-screen w-screen overflow-hidden bg-bg-base">
            <!-- App sidebar -->
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
                    <SidebarGroup>
                        <SidebarItem
                            as="button"
                            :active="activeNav === 'dashboard'"
                            @click="activeNav = 'dashboard'"
                        >
                            <PhHouse /> Dashboard
                        </SidebarItem>
                        <SidebarItem
                            as="button"
                            :active="activeNav === 'analytics'"
                            @click="activeNav = 'analytics'"
                        >
                            <PhChartBar /> Analytics
                        </SidebarItem>
                        <SidebarItem
                            as="button"
                            :active="activeNav === 'projects'"
                            @click="activeNav = 'projects'"
                        >
                            <PhFolder /> Projects
                        </SidebarItem>
                        <SidebarItem
                            as="button"
                            :active="activeNav === 'settings'"
                            @click="activeNav = 'settings'"
                        >
                            <PhGear /> Settings
                        </SidebarItem>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <div class="flex items-center gap-2">
                        <Avatar name="Daniel Lobo" :src="null" size="sm" />
                        <span
                            class="flex-1 truncate text-sm font-medium text-text-primary"
                            >Daniel Lobo</span
                        >
                        <Badge variant="primary">Pro</Badge>
                    </div>
                </SidebarFooter>
            </Sidebar>

            <!-- Main area -->
            <div class="flex flex-1 flex-col overflow-hidden">
                <header
                    class="flex items-center gap-3 border-b border-border-subtle bg-bg-raised px-6 py-3"
                >
                    <SidebarTrigger />
                    <span class="font-medium text-text-primary">Settings</span>
                    <RouterLink to="/" class="ml-auto">
                        <Button variant="secondary" size="sm">
                            <PhArrowLeft class="size-4" /> Back to showcase
                        </Button>
                    </RouterLink>
                </header>

                <main class="flex-1 overflow-auto">
                    <div class="mx-auto w-full max-w-2xl px-6 py-8">
                        <!-- Identity header -->
                        <div class="mb-6 flex items-center gap-4">
                            <Avatar name="Daniel Lobo" :src="null" size="lg" />
                            <div>
                                <h1
                                    class="text-xl font-semibold text-text-primary"
                                >
                                    {{ name }}
                                </h1>
                                <p class="text-sm text-text-secondary">
                                    {{ email }}
                                </p>
                            </div>
                            <Badge variant="primary" class="ml-auto">Pro</Badge>
                        </div>

                        <Tabs>
                            <TabsList>
                                <TabsTrigger>Profile</TabsTrigger>
                                <TabsTrigger>Security</TabsTrigger>
                                <TabsTrigger>Notifications</TabsTrigger>
                                <TabsTrigger>Billing</TabsTrigger>
                            </TabsList>

                            <TabsPanels>
                                <!-- Profile -->
                                <TabsContent>
                                    <Panel>
                                        <PanelContent
                                            class="flex flex-col gap-y-4 p-8"
                                        >
                                            <Field>
                                                <FieldLabel>Name</FieldLabel>
                                                <FieldContent>
                                                    <Input
                                                        v-model="name"
                                                        placeholder="Your name"
                                                    />
                                                </FieldContent>
                                            </Field>
                                            <Field>
                                                <FieldLabel>Email</FieldLabel>
                                                <FieldContent>
                                                    <Input
                                                        v-model="email"
                                                        type="email"
                                                        placeholder="you@example.com"
                                                    />
                                                    <FieldDescription
                                                        >Used for sign-in and
                                                        notifications.</FieldDescription
                                                    >
                                                </FieldContent>
                                            </Field>
                                            <div class="flex justify-end">
                                                <Button variant="primary"
                                                    >Save profile</Button
                                                >
                                            </div>
                                        </PanelContent>
                                    </Panel>
                                </TabsContent>

                                <!-- Security -->
                                <TabsContent>
                                    <Panel>
                                        <PanelContent
                                            class="flex flex-col gap-y-4 p-8"
                                        >
                                            <Field orientation="horizontal">
                                                <Switch v-model="twoFactor" />
                                                <FieldLabel
                                                    >Two-factor
                                                    authentication</FieldLabel
                                                >
                                            </Field>
                                            <Field orientation="horizontal">
                                                <Switch
                                                    v-model="sessionAlerts"
                                                />
                                                <FieldLabel
                                                    >Alert me about new
                                                    sign-ins</FieldLabel
                                                >
                                            </Field>

                                            <div
                                                class="border-t border-border-subtle"
                                            >
                                                <Disclosure>
                                                    <DisclosureTrigger
                                                        >Advanced
                                                        options</DisclosureTrigger
                                                    >
                                                    <DisclosureContent>
                                                        <div
                                                            class="flex flex-col gap-3 pt-1"
                                                        >
                                                            <div
                                                                class="flex items-center gap-2"
                                                            >
                                                                <Checkbox
                                                                    id="api"
                                                                    v-model="
                                                                        apiAccess
                                                                    "
                                                                />
                                                                <Label for="api"
                                                                    >Enable API
                                                                    access</Label
                                                                >
                                                            </div>
                                                            <div
                                                                class="flex items-center gap-2"
                                                            >
                                                                <Checkbox
                                                                    id="beta"
                                                                    v-model="
                                                                        betaFeatures
                                                                    "
                                                                />
                                                                <Label
                                                                    for="beta"
                                                                    >Join the
                                                                    beta
                                                                    program</Label
                                                                >
                                                            </div>
                                                        </div>
                                                    </DisclosureContent>
                                                </Disclosure>
                                            </div>
                                        </PanelContent>
                                    </Panel>
                                </TabsContent>

                                <!-- Notifications -->
                                <TabsContent>
                                    <Panel>
                                        <PanelContent
                                            class="flex flex-col gap-y-4 p-8"
                                        >
                                            <Field orientation="horizontal">
                                                <Switch v-model="emailNotifs" />
                                                <FieldLabel
                                                    >Email
                                                    notifications</FieldLabel
                                                >
                                            </Field>
                                            <Field orientation="horizontal">
                                                <Switch v-model="pushNotifs" />
                                                <FieldLabel
                                                    >Push
                                                    notifications</FieldLabel
                                                >
                                            </Field>
                                        </PanelContent>
                                    </Panel>
                                </TabsContent>

                                <!-- Billing -->
                                <TabsContent>
                                    <Panel>
                                        <PanelContent
                                            class="flex flex-col gap-y-4 p-8"
                                        >
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <div>
                                                    <p
                                                        class="font-medium text-text-primary"
                                                    >
                                                        Pro plan
                                                    </p>
                                                    <p
                                                        class="text-sm text-text-secondary"
                                                    >
                                                        $20 / month · renews
                                                        June 30
                                                    </p>
                                                </div>
                                                <Badge variant="success"
                                                    >Active</Badge
                                                >
                                            </div>
                                            <Separator />
                                            <div>
                                                <p
                                                    class="font-medium text-text-primary"
                                                >
                                                    Payment method
                                                </p>
                                                <p
                                                    class="mt-1 text-sm text-text-secondary"
                                                >
                                                    Visa ending in 4242
                                                </p>
                                            </div>
                                            <div
                                                class="flex items-center gap-2"
                                            >
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    >Change plan</Button
                                                >
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    >Update card</Button
                                                >
                                            </div>
                                        </PanelContent>
                                    </Panel>
                                </TabsContent>
                            </TabsPanels>
                        </Tabs>
                    </div>
                </main>
            </div>
        </div>
    </SidebarProvider>
</template>
