<script setup lang="ts">
import { ref, nextTick } from "vue";
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
    Textarea,
    Kbd,
} from "@dlbcodes/my-design-system";
import {
    PhPlus,
    PhChatCircle,
    PhPaperPlaneTilt,
    PhArrowLeft,
    PhSparkle,
} from "@phosphor-icons/vue";

interface Message {
    id: number;
    role: "user" | "assistant";
    text: string;
}

const conversations = [
    { id: "1", title: "Design system architecture" },
    { id: "2", title: "Tailwind v4 tokens" },
    { id: "3", title: "Vue vs React tradeoffs" },
];
const activeConversation = ref("1");

const messages = ref<Message[]>([
    {
        id: 1,
        role: "user",
        text: "How should I structure a component library?",
    },
    {
        id: 2,
        role: "assistant",
        text: "Start with a clear separation: primitives (Button, Badge), composed form controls (Field, Input), and overlays (Modal, Popover). Keep styling tokenized so the whole system themes from one place.",
    },
    {
        id: 3,
        role: "user",
        text: "Should components be compound or prop-driven?",
    },
    {
        id: 4,
        role: "assistant",
        text: "Compound, where it makes sense — expose the parts (Trigger, Content, Item) so consumers compose the markup they need, rather than configuring one component with dozens of props.",
    },
]);

const draft = ref("");
const messagesEl = ref<HTMLElement | null>(null);
let nextId = 5;

const scrollToBottom = async (): Promise<void> => {
    await nextTick();
    if (messagesEl.value)
        messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
};

const send = async (): Promise<void> => {
    const text = draft.value.trim();
    if (!text) return;
    messages.value.push({ id: nextId++, role: "user", text });
    draft.value = "";
    await scrollToBottom();

    // Canned assistant reply (this is a static UI demo, not a real model).
    setTimeout(async () => {
        messages.value.push({
            id: nextId++,
            role: "assistant",
            text: "This is a demo interface built with the design system — the reply is canned. The layout, messages, and composer all use the library's components and tokens.",
        });
        await scrollToBottom();
    }, 500);
};

const onKeydown = (e: KeyboardEvent): void => {
    // Enter sends, Shift+Enter makes a newline.
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
    }
};

const newChat = (): void => {
    messages.value = [];
};
</script>

<template>
    <SidebarProvider>
        <div class="flex h-screen w-screen overflow-hidden bg-bg-base">
            <!-- Conversation history sidebar -->
            <Sidebar>
                <SidebarHeader>
                    <div
                        class="flex size-8 items-center justify-center rounded-lg bg-bg-inverse text-text-inverse"
                    >
                        <PhSparkle class="size-4" />
                    </div>
                    <span class="font-semibold text-text-primary"
                        >Assistant</span
                    >
                </SidebarHeader>

                <SidebarContent>
                    <div class="px-1 pb-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            class="w-full justify-start"
                            @click="newChat"
                        >
                            <PhPlus class="size-4" /> New chat
                        </Button>
                    </div>
                    <SidebarGroup label="Recent">
                        <SidebarItem
                            v-for="c in conversations"
                            :key="c.id"
                            as="button"
                            :active="activeConversation === c.id"
                            @click="activeConversation = c.id"
                        >
                            <PhChatCircle /> {{ c.title }}
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

            <!-- Chat area -->
            <div class="flex flex-1 flex-col overflow-hidden">
                <header
                    class="flex items-center gap-3 border-b border-border-subtle bg-bg-raised px-4 py-3"
                >
                    <SidebarTrigger />
                    <span class="font-medium text-text-primary"
                        >New conversation</span
                    >
                    <Badge variant="neutral" class="ml-2">model-x</Badge>
                    <RouterLink to="/" class="ml-auto">
                        <Button variant="secondary" size="sm">
                            <PhArrowLeft class="size-4" /> Back
                        </Button>
                    </RouterLink>
                </header>

                <!-- Messages -->
                <div
                    ref="messagesEl"
                    class="flex-1 overflow-y-auto scrollbar-thin"
                >
                    <div
                        class="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-6"
                    >
                        <div
                            v-for="m in messages"
                            :key="m.id"
                            class="flex gap-3"
                            :class="m.role === 'user' ? 'flex-row-reverse' : ''"
                        >
                            <Avatar
                                v-if="m.role === 'assistant'"
                                name="AI"
                                :src="null"
                                size="sm"
                            />
                            <div
                                class="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                                :class="
                                    m.role === 'user'
                                        ? 'bg-bg-inverse text-text-inverse'
                                        : 'bg-bg-surface text-text-primary'
                                "
                            >
                                {{ m.text }}
                            </div>
                        </div>

                        <div
                            v-if="messages.length === 0"
                            class="py-12 text-center text-sm text-text-tertiary"
                        >
                            Start a new conversation below.
                        </div>
                    </div>
                </div>

                <!-- Composer -->
                <div
                    class="border-t border-border-subtle bg-bg-raised px-4 py-3"
                >
                    <div class="mx-auto flex max-w-2xl items-end gap-2">
                        <div class="flex-1">
                            <Textarea
                                v-model="draft"
                                placeholder="Send a message…"
                                :rows="1"
                                @keydown="onKeydown"
                            />
                        </div>
                        <Button
                            variant="primary"
                            size="icon"
                            :disabled="!draft.trim()"
                            @click="send"
                        >
                            <PhPaperPlaneTilt class="size-4" />
                        </Button>
                    </div>
                    <p
                        class="mx-auto mt-2 flex max-w-2xl items-center gap-1 text-xs text-text-tertiary"
                    >
                        <Kbd>⏎</Kbd> to send, <Kbd>⇧⏎</Kbd> for a new line
                    </p>
                </div>
            </div>
        </div>
    </SidebarProvider>
</template>
