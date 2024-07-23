<script>
    export let text = "";
    export let color = "";
    export let condition = false;
</script>

{#if condition}
    <div class={`${color} px-2 py-1 text-xs font-mono rounded-full`}>
        {text}
    </div>
{/if}
