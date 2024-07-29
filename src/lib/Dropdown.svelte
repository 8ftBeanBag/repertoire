<script lang="ts">
    export let color = "bg-green-700";
    export let options: Array<String> = [];
    export let title = "Dropdown";
    let isDropdownOpen = false;

    const handleDropdownClick = () => {
        isDropdownOpen = !isDropdownOpen;
    };

    const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
        if (
            relatedTarget instanceof HTMLElement &&
            currentTarget.contains(relatedTarget)
        )
            return;
        isDropdownOpen = false;
    };
</script>

<div on:focusout={handleDropdownFocusLoss}>
    <button class={`px-2 rounded-lg ${color}`} on:click={handleDropdownClick}>
        {title}
    </button>
    <div
        class="w-screen h-screen fixed bg-neutral-300 bg-opacity-40 top-0 left-0 flex justify-center items-center"
        style:visibility={isDropdownOpen ? "visible" : "hidden"}
    >
        <div
            class="bg-white shadow rounded-lg w-40 h-72 flex flex-col justify-between"
        >
            <ul class="p-4">
                {#each options as option (option)}
                    <li
                        class="hover:bg-purple-800 hover:text-white px-2 py-0.5 rounded-lg"
                    >
                        <button class="w-full text-start">
                            {option}
                        </button>
                    </li>
                {/each}
            </ul>
            <div class={`${color} flex px-4 py-2 rounded-b-lg gap-2`}>
                <button
                    class="px-2 py-0.5 bg-purple-800 text-white rounded-lg w-full"
                >
                    Apply
                </button>
                <button
                    class="px-2 py-0.5 bg-purple-800 text-white rounded-lg w-full"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
</div>
