<script>
  import { link } from "svelte-spa-router";

  export let to;

  console.log(to);
</script>

<main>
    <a href={to} use:link>
    <slot />
  </a>
</main>
