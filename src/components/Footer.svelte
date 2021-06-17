<script>
  import Hyperlink from "./Hyperlink.svelte";

  let resourceList = [
    {
      url: "https://auth0.com/why-auth0/",
      label: "Why Auth0"
    },
    {
      url: "https://auth0.com/docs/get-started",
      label: "How It Works"
    },
    {
      url: "https://auth0.com/blog/developers/",
      label: "Developer Blog"
    },
    {
      url: "https://auth0.com/contact-us",
      label: "Contact an Expert"
    }
  ];

  function signUp(params) {}
</script>

<main>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-grid__info">
        <div class="footer-info__message">
          <p class="footer-message__headline">
            <span>This sample application is brought to you by&nbsp;</span>
            <Hyperlink url="https://auth0.com/">Auth0</Hyperlink>
          </p>
          <p class="footer-message__description">
            <Hyperlink url="https://auth0.com/docs/quickstarts/">
              <span>
                Securely implement authentication using Auth0 on any stack and
                any device&nbsp;
              </span>
              <u>in less than 10 minutes</u>
            </Hyperlink>
          </p>
        </div>
        <div class="footer-info__button">
          <button class="button button--secondary" on:click={signUp}>
            Create Free Auth0 Account
          </button>
        </div>
        <div class="footer-info__resource-list">
          {#each resourceList as resource}
            <div class="footer-info__resource-list-item">
              <Hyperlink url={resource.url}>
                {resource.label}
              </Hyperlink>
            </div>
          {/each}
        </div>
      </div>
      <div class="footer-grid__brand">
        <div class="footer-brand">
          <img
            class="footer-brand__logo"
            src="https://images.ctfassets.net/23aumh6u8s0i/1UiaijF2PoaHIfcaIMRWYZ/cba84a2df9ba67f48e80aa117d0c78a3/auth0-shield.svg"
            alt="Auth0"
            width="20"
            height="22.22"
          />
          <Hyperlink url="https://auth0.com/">Auth0 Inc</Hyperlink>
        </div>
      </div>
    </div>
  </footer>
</main>
