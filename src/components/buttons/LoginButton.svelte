<script>
  import { auth0Client } from "../../store";
  import auth from "../../authService";

  function login() {
    auth.loginWithPopup($auth0Client);
  }
</script>

<main>
  <button
    type="button"
    class="button button--primary button--compact"
    on:click={() => login()}
  >
    Log In
  </button>
</main>
