<script setup lang="ts">
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsPanels,
    TabsContent,
    Disclosure,
    DisclosureTrigger,
    DisclosureContent,
} from "@dlbcodes/my-design-system";

interface Faq {
    q: string;
    a: string;
}

const categories: { name: string; faqs: Faq[] }[] = [
    {
        name: "Billing",
        faqs: [
            {
                q: "Can I cancel anytime?",
                a: "Yes — cancel from your account settings at any point, and you keep access until the end of the billing period.",
            },
            {
                q: "Do you offer refunds?",
                a: "Annual plans come with a 30-day money-back guarantee. Monthly plans aren't refundable but can be cancelled anytime.",
            },
            {
                q: "Can I change plans later?",
                a: "Absolutely. Upgrades take effect immediately; downgrades apply at the next renewal.",
            },
        ],
    },
    {
        name: "Account",
        faqs: [
            {
                q: "How do I reset my password?",
                a: "Use the 'Forgot password' link on the login screen — we'll email you a reset link.",
            },
            {
                q: "Can I change my email?",
                a: "Yes, from Settings → Profile. You'll need to confirm the new address.",
            },
            {
                q: "How do I delete my account?",
                a: "Settings → Account → Delete account. This is permanent and removes all your data.",
            },
        ],
    },
    {
        name: "General",
        faqs: [
            {
                q: "Is there a free trial?",
                a: "Every plan includes a 14-day free trial — no card required to start.",
            },
            {
                q: "Do you have an API?",
                a: "Yes, a full REST API is available on Pro and Enterprise plans.",
            },
            {
                q: "How do I contact support?",
                a: "Email support@example.com, or use the in-app chat on business days.",
            },
        ],
    },
];
</script>

<template>
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">Help & FAQ</h1>
            <p class="mt-1 text-sm text-text-secondary">
                Find answers, organized by topic.
            </p>
        </div>

        <Tabs>
            <TabsList>
                <TabsTrigger v-for="cat in categories" :key="cat.name">
                    {{ cat.name }}
                </TabsTrigger>
            </TabsList>
            <TabsPanels>
                <TabsContent v-for="cat in categories" :key="cat.name">
                    <div
                        class="rounded-2xl border border-border-subtle bg-bg-raised px-5"
                    >
                        <Disclosure v-for="faq in cat.faqs" :key="faq.q">
                            <DisclosureTrigger>{{ faq.q }}</DisclosureTrigger>
                            <DisclosureContent>{{ faq.a }}</DisclosureContent>
                        </Disclosure>
                    </div>
                </TabsContent>
            </TabsPanels>
        </Tabs>
    </div>
</template>
