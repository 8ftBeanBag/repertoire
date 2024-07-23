<script lang="ts">
    import type { TSongs } from "../types/converter";

    export let songs: Array<TSongs> | [] = [];
</script>

<div>
    {#each songs as song, i}
        <div>{song.title}</div>
    {/each}
</div>

<style>
</style>
