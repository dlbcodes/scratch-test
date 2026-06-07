<script setup lang="ts">
import { ref } from "vue";
import {
    Panel,
    PanelContent,
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    Input,
    Textarea,
    Switch,
    Checkbox,
    Label,
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Button,
} from "@dlbcodes/my-design-system";

const name = ref("Daniel Lobo");
const email = ref("daniel@example.com");
const bio = ref("");
const language = ref("");
const emailNotifications = ref(true);
const pushNotifications = ref(false);
const marketing = ref(false);

const save = (): void => {
    console.log({
        name: name.value,
        email: email.value,
        bio: bio.value,
        language: language.value,
        emailNotifications: emailNotifications.value,
        pushNotifications: pushNotifications.value,
        marketing: marketing.value,
    });
};
</script>

<template>
    <div class="flex flex-col gap-8">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">Settings</h1>
            <p class="mt-1 text-sm text-text-secondary">
                Manage your account preferences.
            </p>
        </div>

        <!-- Profile section -->
        <Panel>
            <PanelContent class="flex flex-col gap-4 p-8">
                <PanelTitle class="text-lg font-medium text-text-primary">
                    Profile
                </PanelTitle>
                <Field>
                    <FieldLabel>Name</FieldLabel>
                    <FieldContent>
                        <Input v-model="name" placeholder="Your name" />
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
                            >We'll never share your email.</FieldDescription
                        >
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Bio</FieldLabel>
                    <FieldContent>
                        <Textarea
                            v-model="bio"
                            autosize
                            :rows="3"
                            placeholder="Tell us about yourself…"
                        />
                        <FieldDescription
                            >A short description for your
                            profile.</FieldDescription
                        >
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Language</FieldLabel>
                    <FieldContent>
                        <Select v-model="language">
                            <SelectTrigger placeholder="Select a language" />
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="pt">Português</SelectItem>
                                <SelectItem value="es">Español</SelectItem>
                                <SelectItem value="fr">Français</SelectItem>
                            </SelectContent>
                        </Select>
                    </FieldContent>
                </Field>
            </PanelContent>
        </Panel>

        <!-- Notifications section -->
        <Panel>
            <PanelContent class="flex flex-col gap-4 p-8">
                <PanelTitle class="text-lg font-medium text-text-primary">
                    Notifications
                </PanelTitle>

                <Field orientation="horizontal">
                    <Switch v-model="emailNotifications" />
                    <FieldLabel>Email notifications</FieldLabel>
                </Field>

                <Field orientation="horizontal">
                    <Switch v-model="pushNotifications" />
                    <FieldLabel>Push notifications</FieldLabel>
                </Field>

                <div class="flex items-center gap-2">
                    <Checkbox id="marketing" v-model="marketing" />
                    <Label for="marketing">Receive marketing emails</Label>
                </div>
            </PanelContent>
        </Panel>

        <div class="flex justify-end gap-3">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary" @click="save">Save changes</Button>
        </div>
    </div>
</template>
