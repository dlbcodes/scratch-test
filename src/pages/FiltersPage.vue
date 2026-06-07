<script setup lang="ts">
import { ref, computed } from "vue";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    Badge,
    Checkbox,
    Label,
    Input,
} from "@dlbcodes/my-design-system";
import { PhFunnel, PhCalendar, PhTag } from "@phosphor-icons/vue";

const statuses = ["Active", "Pending", "Archived"];
const selectedStatuses = ref<string[]>([]);

const toggleStatus = (s: string): void => {
    const i = selectedStatuses.value.indexOf(s);
    i === -1
        ? selectedStatuses.value.push(s)
        : selectedStatuses.value.splice(i, 1);
};

const dateFrom = ref("");
const dateTo = ref("");

const activeFilterCount = computed(
    () =>
        selectedStatuses.value.length +
        (dateFrom.value || dateTo.value ? 1 : 0),
);
</script>

<template>
    <div class="flex flex-col gap-6">
        <div>
            <h1 class="text-2xl font-semibold text-text-primary">Filters</h1>
            <p class="mt-1 text-sm text-text-secondary">
                Popover-based filter controls.
            </p>
        </div>

        <div
            class="flex items-center gap-3 rounded-2xl border border-border-subtle bg-bg-raised p-4"
        >
            <!-- Status filter -->
            <Popover>
                <PopoverTrigger>
                    <Button variant="outline" size="sm">
                        <PhTag class="size-4" />
                        Status
                        <Badge v-if="selectedStatuses.length" variant="primary">
                            {{ selectedStatuses.length }}
                        </Badge>
                    </Button>
                </PopoverTrigger>
                <PopoverContent size="xs">
                    <div class="flex flex-col gap-2 p-1">
                        <div
                            v-for="s in statuses"
                            :key="s"
                            class="flex items-center gap-2"
                        >
                            <Checkbox
                                :id="`status-${s}`"
                                :model-value="selectedStatuses.includes(s)"
                                @update:model-value="toggleStatus(s)"
                            />
                            <Label :for="`status-${s}`">{{ s }}</Label>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            <!-- Date range filter -->
            <Popover>
                <PopoverTrigger>
                    <Button variant="outline" size="sm">
                        <PhCalendar class="size-4" />
                        Date range
                        <Badge v-if="dateFrom || dateTo" variant="primary"
                            >1</Badge
                        >
                    </Button>
                </PopoverTrigger>
                <PopoverContent size="sm">
                    <div class="flex flex-col gap-3 p-1">
                        <div class="flex flex-col gap-1">
                            <Label for="from">From</Label>
                            <Input id="from" v-model="dateFrom" type="date" />
                        </div>
                        <div class="flex flex-col gap-1">
                            <Label for="to">To</Label>
                            <Input id="to" v-model="dateTo" type="date" />
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            <div
                class="ml-auto flex items-center gap-2 text-sm text-text-secondary"
            >
                <PhFunnel class="size-4" />
                {{ activeFilterCount }} active
            </div>
        </div>

        <!-- A "Save view" popover that closes itself -->
        <Popover placement="bottom-start">
            <PopoverTrigger>
                <Button variant="primary" size="sm">Save current view</Button>
            </PopoverTrigger>
            <PopoverContent size="sm">
                <template #default="{ close }">
                    <div class="flex flex-col gap-3 p-1">
                        <Label for="viewname">View name</Label>
                        <Input
                            id="viewname"
                            placeholder="e.g. Active this week"
                        />
                        <div class="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" @click="close"
                                >Cancel</Button
                            >
                            <Button variant="primary" size="sm" @click="close"
                                >Save</Button
                            >
                        </div>
                    </div>
                </template>
            </PopoverContent>
        </Popover>
    </div>
</template>
