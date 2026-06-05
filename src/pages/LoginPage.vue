<script setup lang="ts">
import { ref } from "vue";
import {
    Panel,
    PanelContent,
    Field,
    FieldLabel,
    FieldContent,
    Input,
    Checkbox,
    Label,
    Button,
} from "my-design-system";
import { PhGoogleLogo, PhGithubLogo } from "@phosphor-icons/vue";

const email = ref("");
const password = ref("");
const remember = ref(false);

const submit = (): void => {
    // eslint-disable-next-line no-console
    console.log({
        email: email.value,
        password: password.value,
        remember: remember.value,
    });
};
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-bg-base p-4">
        <Panel class="max-w-md">
            <PanelContent class="flex flex-col gap-4 p-8">
                <!-- Header -->
                <div class="flex flex-col gap-1 text-center">
                    <h1 class="text-2xl font-semibold text-text-primary">
                        Welcome back
                    </h1>
                    <p class="text-sm text-text-secondary">
                        Sign in to your account to continue.
                    </p>
                </div>

                <!-- Social -->
                <div class="flex flex-col gap-2">
                    <Button variant="outline" class="w-full">
                        <PhGoogleLogo class="size-5" />
                        Continue with Google
                    </Button>
                    <Button variant="outline" class="w-full">
                        <PhGithubLogo class="size-5" />
                        Continue with GitHub
                    </Button>
                </div>

                <!-- Divider -->
                <div class="flex items-center gap-3">
                    <div class="h-px flex-1 bg-border-subtle"></div>
                    <span class="text-xs text-text-tertiary">or</span>
                    <div class="h-px flex-1 bg-border-subtle"></div>
                </div>

                <!-- Form -->
                <div class="flex flex-col gap-4">
                    <Field>
                        <FieldLabel>Email</FieldLabel>
                        <FieldContent>
                            <Input
                                v-model="email"
                                type="email"
                                placeholder="you@example.com"
                            />
                        </FieldContent>
                    </Field>

                    <Field>
                        <FieldLabel>Password</FieldLabel>
                        <FieldContent>
                            <Input
                                v-model="password"
                                type="password"
                                placeholder="••••••••"
                            />
                        </FieldContent>
                    </Field>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <Checkbox id="remember" v-model="remember" />
                            <Label for="remember">Remember me</Label>
                        </div>
                        <a
                            href="#"
                            class="text-sm font-medium text-brand-200 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <Button variant="primary" class="w-full" @click="submit">
                        Sign in
                    </Button>
                </div>

                <!-- Footer -->
                <p class="text-center text-sm text-text-secondary">
                    Don't have an account?
                    <a
                        href="#"
                        class="font-medium text-brand-200 hover:underline"
                        >Sign up</a
                    >
                </p>
            </PanelContent>
        </Panel>
    </div>
</template>
