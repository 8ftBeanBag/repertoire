<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let color = "bg-green-700";
    export let options: Array<String> = [];
    export let title = "Dropdown";
    let isDropdownOpen = false;
    let selected: Array<String> = [];
    const dispatchVals = createEventDispatcher();

    const handleDropdownClick = () => {
        isDropdownOpen = !isDropdownOpen;
    };

    type stupidParams = {
        relatedTarget: any;
        currentTarget: any;
    };
    const handleDropdownFocusLoss = ({
        relatedTarget,
        currentTarget,
    }: stupidParams) => {
        if (
            relatedTarget instanceof HTMLElement &&
            currentTarget.contains(relatedTarget)
        )
            return;
        isDropdownOpen = false;
    };

    const updateSelected = (sel: String) => {
        let temp = selected;
        if (temp.includes(sel)) {
            temp.splice(temp.indexOf(sel), 1);
        } else {
            temp.push(sel);
        }
        selected = [...temp];
        dispatchVals("selected", { [title]: selected });
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
                        class={`hover:bg-purple-800 hover:text-white px-2 py-0.5 rounded-lg ${selected.includes(option) ? "bg-purple-400" : ""}`}
                    >
                        <button
                            class="w-full text-start"
                            on:click={() => updateSelected(option)}
                        >
                            {option}
                        </button>
                    </li>
                {/each}
            </ul>
            <div class={`${color} flex px-4 py-2 rounded-b-lg gap-2`}>
                <button
                    class="px-2 py-0.5 bg-purple-800 text-white rounded-lg w-full"
                    on:click={handleDropdownClick}
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</div>
