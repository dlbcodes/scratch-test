<script setup lang="ts">
import { ref } from "vue";
import {
    Panel,
    PanelContent,
    Avatar,
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    Input,
    Textarea,
    Checkbox,
    Label,
    MultiSelect,
    MultiSelectTrigger,
    MultiSelectContent,
    MultiSelectItem,
    Button,
} from "@dlbcodes/my-design-system";

const name = ref("Daniel Lobo");
const bio = ref("Frontend engineer who likes design systems.");
const avatar = "https://i.pravatar.cc/120?img=2";
const skills = ref<string[]>(["vue", "ts"]);
const isPublic = ref(true);

const skillOptions = [
    { value: "vue", label: "Vue" },
    { value: "ts", label: "TypeScript" },
    { value: "css", label: "CSS" },
    { value: "node", label: "Node.js" },
    { value: "design", label: "UI Design" },
];
</script>

<template>
    <div class="flex flex-col gap-8">
        <div class="flex items-center gap-4">
            <Avatar :src="avatar" :name="name" size="lg" />
            <div>
                <h1 class="text-lg font-medium text-text-primary">
                    {{ name }}
                </h1>
                <p class="text-sm text-text-secondary">
                    Edit your public profile.
                </p>
            </div>
        </div>

        <Panel>
            <PanelContent class="flex flex-col gap-4 p-8">
                <Field>
                    <FieldLabel>Display name</FieldLabel>
                    <FieldContent>
                        <Input v-model="name" placeholder="Your name" />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Bio</FieldLabel>
                    <FieldContent>
                        <Textarea
                            v-model="bio"
                            autosize
                            :rows="3"
                            placeholder="A short bio…"
                        />
                        <FieldDescription
                            >Shown on your public profile.</FieldDescription
                        >
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Skills</FieldLabel>
                    <FieldContent>
                        <MultiSelect
                            v-model="skills"
                            :options="skillOptions"
                            placeholder="Select skills"
                        >
                            <template #default="{ label, empty }">
                                <MultiSelectTrigger
                                    :label="label"
                                    :empty="empty"
                                />
                                <MultiSelectContent>
                                    <MultiSelectItem
                                        v-for="o in skillOptions"
                                        :key="o.value"
                                        :value="o.value"
                                        :label="o.label"
                                    />
                                </MultiSelectContent>
                            </template>
                        </MultiSelect>
                        <FieldDescription
                            >Pick the technologies you work
                            with.</FieldDescription
                        >
                    </FieldContent>
                </Field>

                <div class="flex items-center gap-2">
                    <Checkbox id="public" v-model="isPublic" />
                    <Label for="public">Make my profile public</Label>
                </div>
            </PanelContent>
        </Panel>

        <div class="flex justify-end gap-3">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Save profile</Button>
        </div>
    </div>
</template>
