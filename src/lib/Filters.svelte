<script>
    import { EGenre, ETempo, EVibe } from "../types/enums";
    import Dropdown from "./Dropdown.svelte";
</script>

<div class="flex gap-2">
    <button class="px-2 bg-neutral-300 rounded-lg">A-Z</button>
    <Dropdown
        title="Genres"
        color="bg-blue-m"
        options={Object.values(EGenre).filter((e) => typeof e === "string")}
    />
    <Dropdown
        title="Tempo"
        color="bg-mauve"
        options={Object.values(ETempo).filter((e) => typeof e === "string")}
    />
    <Dropdown
        title="Vibe"
        color="bg-lavender"
        options={Object.values(EVibe).filter((e) => typeof e === "string")}
    />
</div>
