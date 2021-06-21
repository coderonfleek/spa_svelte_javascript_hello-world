<script>
  import CodeSnippet from "../components/CodeSnippet.svelte";
  import { user } from "../store";

  $: code = JSON.stringify($user, null, 2);
</script>

<main>
  <div class="content-layout">
    <h1 class="content__title">Profile</h1>
    <div class="content__body">
      <p>
        You can use the ID Token to get the profile information of an
        authenticated user.
        <br />
        <strong>Only authenticated users can access this page.</strong>
      </p>
      <div class="profile-grid">
        <div class="profile__header">
          <img src={$user.picture} alt="Profile" class="profile__avatar" />
          <div class="profile__headline">
            <h2 class="profile__title">{$user.name}</h2>
            <span class="profile__description">{$user.email}</span>
          </div>
        </div>
        <div class="profile__details">
          <CodeSnippet {code} />
        </div>
      </div>
    </div>
  </div>
</main>
