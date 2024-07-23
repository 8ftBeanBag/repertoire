<script lang="ts">
    import type { TSongs } from "../types/converter";
    import ConditionalBadge from "./ConditionalBadge.svelte";

    export let songs:
        | Array<TSongs & { books: { title: string | undefined } }>
        | [] = [];
</script>

<div class="mt-4">
    {#each songs as song, i (song.id)}
        <div class="px-4">
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
        <hr class="my-4 mx-4" />
    {/each}
</div>

<style>
</style>
