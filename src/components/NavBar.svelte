<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import RouterLink from "./RouterLink.svelte";
</script>

<main>
  <div class="nav-bar__container">
    <nav class="nav-bar">
      <div class="nav-bar__brand">
        <RouterLink to="/">
          <img
            class="nav-bar__logo"
            src="https://images.ctfassets.net/23aumh6u8s0i/1UiaijF2PoaHIfcaIMRWYZ/cba84a2df9ba67f48e80aa117d0c78a3/auth0-shield.svg"
            alt="Auth0 shield logo"
            width="35.98"
            height="40"
          />
        </RouterLink>
      </div>
      <div class="nav-bar__tabs">
        <a
          href="/profile"
          use:link
          class="nav-bar__tab"
          use:active={{ className: "nav-bar__tab--active" }}
        >
          Profile
        </a>

        <a
          href="/external-api"
          use:link
          class="nav-bar__tab"
          use:active={{ className: "nav-bar__tab--active" }}
        >
          External API
        </a>
      </div>
      <div class="nav-bar__actions">
        <authentication-button />
      </div>
    </nav>
  </div>
</main>
