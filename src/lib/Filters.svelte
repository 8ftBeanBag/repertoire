<script lang="ts">
    import { EGenre, ETempo, EVibe } from "../types/enums";
    import Dropdown from "./Dropdown.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let sortDir = true;

    function sortAZ() {
        sortDir = !sortDir;
        dispatch("sort", { sortDir });
    }

    function updateDropdownSel(event: any) {
        for (let key of Object.keys(event.detail)) {
            switch (key) {
                case "Genre":
                    dispatch("filter", { genre: event.detail["Genre"] });
                case "Tempo":
                    dispatch("filter", { tempo: event.detail["Temoo"] });
                case "Vibe":
                    dispatch("filter", { vibe: event.detail["Vibe"] });
            }
        }
    }
</script>

<div class="flex gap-2">
    <button class="px-2 bg-neutral-300 rounded-lg" on:click={sortAZ}>
        {sortDir ? "A-Z" : "Z-A"}
    </button>
    <Dropdown
        title="Genre"
        color="bg-blue-m"
        options={Object.values(EGenre).filter((e) => typeof e === "string")}
        on:selected={updateDropdownSel}
    />
    <Dropdown
        title="Tempo"
        color="bg-mauve"
        options={Object.values(ETempo).filter((e) => typeof e === "string")}
        on:selected={updateDropdownSel}
    />
    <Dropdown
        title="Vibe"
        color="bg-lavender"
        options={Object.values(EVibe).filter((e) => typeof e === "string")}
        on:selected={updateDropdownSel}
    />
</div>
