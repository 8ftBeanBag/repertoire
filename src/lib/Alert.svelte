<script lang="ts">
    export let text = "";
    export let color = "bg-red-400";
</script>

<div>
    <div class="flex justify-center items-center w-screen mt-48">
        <div class={`${color} rounded text-white px-24 py-12 text-center`}>
            {text}
        </div>
    </div>
</div>
