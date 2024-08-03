<script>
    import Badge from "./Badge.svelte";

    export let text = "";
    export let color = "";
    export let condition = false;
</script>

{#if condition}
    <Badge {text} {color} />
{/if}
