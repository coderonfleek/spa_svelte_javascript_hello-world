<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  export let to;

  console.log(to);
</script>

<main>
  <span>
    <a href={to} use:link use:active={{ className: "active" }}>
      <slot />
    </a>
  </span>
</main>
