<script>
  import { auth0Client } from "../../store";
  import auth from "../../authService";

  function logout() {
    console.log($auth0Client);
    auth.logout($auth0Client);
  }
</script>

<main>
  <button
    type="button"
    class="button button--primary button--compact"
    on:click={() => logout()}
  >
    Log Out
  </button>
</main>
