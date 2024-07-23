<script lang="ts">
    import type { TSongs } from "../types/converter";
    import ConditionalBadge from "./ConditionalBadge.svelte";

    export let songs: Array<TSongs> | [] = [];
</script>

<div class="mt-6">
    {#each songs as song, i (song.id)}
        <div class="px-4">
            <div class="text-xl">{song.title}</div>
            <div class="flex flex-wrap gap-2">
                <ConditionalBadge
                    text={song.genre?.toString()}
                    color="bg-blue-m"
                    condition={!!song.genre}
                />
                <ConditionalBadge
                    text={song.tempo?.toString()}
                    color="bg-mauve"
                    condition={!!song.tempo}
                />
                <ConditionalBadge
                    text={song.vibe?.toString()}
                    color="bg-lavender"
                    condition={!!song.vibe}
                />
                <ConditionalBadge
                    text={!!song.book && !!song.book_page
                        ? `${song.book} : ${song.book_page}`
                        : `${song.book}`}
                    color="bg-stone-300"
                    condition={!!song.book}
                />
                <div></div>
            </div>
        </div>
        <hr class="my-6 mx-4" />
    {/each}
</div>

<style>
</style>
