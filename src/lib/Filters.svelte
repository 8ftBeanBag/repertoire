<script lang="ts">
    import { EGenre, ETempo, EVibe } from "../types/enums";
    import Dropdown from "./Dropdown.svelte";
    import Badge from "./Badge.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const filterData: { [key: string]: { color: string; options: any } } = {
        Genre: { color: "bg-blue-m", options: EGenre },
        Tempo: { color: "bg-mauve", options: ETempo },
        Vibe: { color: "bg-lavender", options: EVibe },
    };

    // Sort
    let sortDir = true;
    function sortAZ() {
        sortDir = !sortDir;
        dispatch("sort", { sortDir });
    }

    // Filter
    let activeFilters: { [key: string]: Array<string> } = {};
    function updateDropdownSel(event: any) {
        activeFilters = { ...activeFilters, ...event.detail };
        dispatch("filter", activeFilters);
    }
    function unFilter(filterKey: string, filter: string) {
        let filterIdx = activeFilters[filterKey].indexOf(filter);
        activeFilters = {
            ...activeFilters,
            [filterKey]: activeFilters[filterKey].splice(filterIdx, 1),
        };
        dispatch("filter", activeFilters);
    }
</script>

<div>
    <div class="flex gap-2">
        <button class="px-2 bg-neutral-300 rounded-lg" on:click={sortAZ}>
            {sortDir ? "A-Z" : "Z-A"}
        </button>
        {#each Object.keys(filterData) as filterKey}
            <Dropdown
                title={filterKey}
                color={filterData[filterKey].color}
                options={Object.values(filterData[filterKey].options).filter(
                    (e) => typeof e === "string",
                )}
                on:selected={updateDropdownSel}
            />
        {/each}
    </div>
    {#each Object.keys(activeFilters) as filterKey}
        <div
            class={`flex gap-x-2 gap-y-0.5 flex-wrap my-2 text-xs font-mono rounded-lg px-2 py-0.5 ${filterData[filterKey].color}`}
        >
            {activeFilters[filterKey].join(" | ")}
        </div>
    {/each}
</div>
