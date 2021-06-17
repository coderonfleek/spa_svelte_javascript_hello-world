<script>
  export let url;
</script>

<main>
  <a
    href={url}
    class="footer__hyperlink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</main>
