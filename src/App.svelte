<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import SongsTable from "./lib/SongsTable.svelte";
  import Alert from "./lib/Alert.svelte";
  import TitleHero from "./lib/TitleHero.svelte";

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY,
  );

  let fetchSongs = async () => {
    const { data, error } = await supabase.from("songs").select();
    if (error) throw error;
    return data;
  };
</script>

<main class="w-screen h-screen">
  <TitleHero />
  {#await fetchSongs()}
    <Alert text={`🎶 Awesome songs loading 🎶`} color="bg-sky-400" />
  {:then data}
    {#if data}
      <SongsTable songs={data} />
    {/if}
  {:catch error}
    <Alert text={`Oops! ⚠️ ${error.message}`} color="bg-red-400" />
  {/await}
</main>

<style>
</style>
