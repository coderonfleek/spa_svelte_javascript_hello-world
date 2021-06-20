<script>
  let logo =
    "https://images.ctfassets.net/23aumh6u8s0i/4LBuF4xZBx612XX1snfDYZ/924745d96ad04f4b7fd9cc8e70c633aa/vue-2.svg";

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
    <img class="hero-banner__logo" src={logo} alt="Vue logo" />
    <h1 class="hero-banner__headline">Hello, Vue World!</h1>
    <p class="hero-banner__description">
      This is a sample application that demonstrates the authentication flow for
      a Vue app using <strong>Auth0</strong>.
    </p>

    <button
      on:click={(e) => openQuickStart(e)}
      class="button button--secondary"
    >
      Check out the Vue Quickstart →
    </button>
  </div>
</main>
