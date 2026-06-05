<script setup lang="ts">
import { ref, computed } from "vue";
import {
    Panel,
    PanelContent,
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    FieldError,
    Input,
    Textarea,
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Checkbox,
    Label,
    Button,
} from "my-design-system";

const name = ref("");
const slug = ref("");
const description = ref("");
const visibility = ref("");
const agree = ref(false);

// Track whether the user has tried to submit, so errors don't show prematurely.
const submitted = ref(false);

const nameError = computed(() =>
    submitted.value && !name.value.trim() ? "Project name is required." : "",
);
const slugError = computed(() => {
    if (!submitted.value) return "";
    if (!slug.value.trim()) return "Slug is required.";
    if (!/^[a-z0-9-]+$/.test(slug.value))
        return "Use only lowercase letters, numbers, and hyphens.";
    return "";
});
const visibilityError = computed(() =>
    submitted.value && !visibility.value ? "Choose a visibility." : "",
);
const agreeError = computed(() =>
    submitted.value && !agree.value ? "You must accept the terms." : "",
);

const isValid = computed(
    () =>
        !nameError.value &&
        !slugError.value &&
        !visibilityError.value &&
        !agreeError.value,
);

const submit = (): void => {
    submitted.value = true;
    if (isValid.value) {
        console.log({
            name: name.value,
            slug: slug.value,
            description: description.value,
            visibility: visibility.value,
        });
    }
};
</script>

<template>
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">
                Create project
            </h1>
            <p class="mt-1 text-sm text-text-secondary">
                Set up a new project. Required fields are marked.
            </p>
        </div>

        <Panel>
            <PanelContent class="flex flex-col gap-4 p-8">
                <Field required :invalid="!!nameError">
                    <FieldLabel>Project name</FieldLabel>
                    <FieldContent>
                        <Input
                            v-model="name"
                            placeholder="My awesome project"
                        />
                        <FieldError v-if="nameError">{{
                            nameError
                        }}</FieldError>
                    </FieldContent>
                </Field>

                <Field required :invalid="!!slugError">
                    <FieldLabel>Slug</FieldLabel>
                    <FieldContent>
                        <Input
                            v-model="slug"
                            placeholder="my-awesome-project"
                        />
                        <FieldDescription
                            >Used in the project URL. Lowercase, hyphens
                            only.</FieldDescription
                        >
                        <FieldError v-if="slugError">{{
                            slugError
                        }}</FieldError>
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel>Description</FieldLabel>
                    <FieldContent>
                        <Textarea
                            v-model="description"
                            autosize
                            :rows="3"
                            placeholder="What's this project about?"
                        />
                        <FieldDescription
                            >Optional — you can add this
                            later.</FieldDescription
                        >
                    </FieldContent>
                </Field>

                <Field required :invalid="!!visibilityError">
                    <FieldLabel>Visibility</FieldLabel>
                    <FieldContent>
                        <Select v-model="visibility">
                            <SelectTrigger placeholder="Choose visibility" />
                            <SelectContent>
                                <SelectItem value="private">Private</SelectItem>
                                <SelectItem value="team">Team</SelectItem>
                                <SelectItem value="public">Public</SelectItem>
                            </SelectContent>
                        </Select>
                        <FieldError v-if="visibilityError">{{
                            visibilityError
                        }}</FieldError>
                    </FieldContent>
                </Field>

                <Field :invalid="!!agreeError">
                    <FieldContent>
                        <div class="flex items-center gap-2">
                            <Checkbox id="agree" v-model="agree" />
                            <Label for="agree"
                                >I accept the terms of service</Label
                            >
                        </div>
                        <FieldError v-if="agreeError">{{
                            agreeError
                        }}</FieldError>
                    </FieldContent>
                </Field>
            </PanelContent>
        </Panel>

        <div class="flex justify-end gap-3">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary" @click="submit">Create project</Button>
        </div>
    </div>
</template>
