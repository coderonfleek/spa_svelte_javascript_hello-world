<script>
  let logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png";

  function openQuickStart() {
    window.open(
      "https://auth0.com/docs/quickstart/spa/vue",
      "_blank",
      "noopener noreferrer"
    );
  }
</script>

<main>
  <div class="hero-banner">
    <img class="hero-banner__logo" src={logo} alt="Svelte logo" />
    <h1 class="hero-banner__headline">Hello, Svelte World!</h1>
    <p class="hero-banner__description">
      This is a sample application that demonstrates the authentication flow for
      a Svelte app using <strong>Auth0</strong>.
    </p>

    <button
      on:click={(e) => openQuickStart(e)}
      class="button button--secondary"
    >
      Check out the Svelte Quickstart →
    </button>
  </div>
</main>
