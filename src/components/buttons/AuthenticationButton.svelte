<script>
  import { isAuthenticated } from "../../store";
  import LogoutButton from "./LogoutButton.svelte";
  import LoginButton from "./LoginButton.svelte";

  //let isAuthenticated;
</script>

<main>
  <div>
    {#if $isAuthenticated}
      <LogoutButton />
    {:else}
      <LoginButton />
    {/if}
  </div>
</main>
