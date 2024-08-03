<script lang="ts">
    import type { TSongs } from "../types/converter";
    import ConditionalBadge from "./ConditionalBadge.svelte";
    import Filters from "./Filters.svelte";

    export let songs:
        | Array<TSongs & { books: { title: string | undefined } }>
        | [] = [];

    let childSortDir = true;
    $: computedSongs = songs.sort((a, b) =>
        childSortDir
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title),
    );

    function sortSongs(event: any) {
        childSortDir = event.detail.sortDir;
    }

    function filterSongs(event: any) {
        console.log(event);
    }
</script>

<div class="mt-4 my-4 mx-4">
    <div class="sticky top-0 pb-4 pt-2 bg-white">
        <Filters on:sort={sortSongs} on:filter={filterSongs} />
    </div>

    <hr />

    {#each computedSongs as song (song.id)}
        <div class="mt-2 mb-4">
            <div class="text-lg items-center gap-2 mb-2">
                <span>{song.title}</span>
                {#if !!song.books}
                    <div class="text-xs font-mono">
                        {!!song.books && !!song.book_page
                            ? `${song.books.title} pg. ${song.book_page}`
                            : !!song.books
                              ? `${song.books.title}`
                              : ""}
                    </div>
                {/if}
            </div>
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
                <div></div>
            </div>
        </div>
        <hr />
    {/each}
</div>

<style>
</style>
