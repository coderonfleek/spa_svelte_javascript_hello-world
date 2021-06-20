<script>
  export let title;
  export let resourceUrl;
  export let description;
  export let icon;
</script>

<main>
  <a
    href={resourceUrl}
    class="next-step"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 class="next-step__headline">
      <img class="next-step__icon" src={icon} alt="external link icon" />
      {title}
    </h3>
    <p class="next-step__description">{description}</p>
  </a>
</main>
