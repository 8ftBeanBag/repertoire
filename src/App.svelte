<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import SongsTable from "./lib/SongsTable.svelte";
  import Alert from "./lib/Alert.svelte";
  import TitleHero from "./lib/TitleHero.svelte";
  // import data from "./data/test";

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY,
  );

  let fetchSongs = async () => {
    const { data, error } = await supabase
      .from("songs")
      .select(`*, books (title)`);
    if (error) throw error;
    return data;
  };
</script>

<main
  class="min-w-screen h-screen bg-neutral-200 flex justify-center items-center sm:py-8"
>
  <div class="w-screen sm:w-[300px] bg-white rounded-lg h-full overflow-y-auto">
    <TitleHero />
    {#await fetchSongs()}
      <Alert text={`Awesome songs loading`} color="bg-sky-400" />
    {:then data}
      {#if data}
        <SongsTable songs={data} />
      {/if}
    {:catch error}
      <Alert text={`Oops! ⚠️ ${error.message}`} color="bg-red-400" />
    {/await}
  </div>
</main>

<style>
</style>
