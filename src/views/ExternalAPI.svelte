<script>
  import { onMount } from "svelte";
  import { auth0Client } from "../store";
  //let apiServerUrl = process.env.VUE_APP_API_SERVER_URL;
  let apiServerUrl = SVELTE_APP_API_SERVER_URL;
  let message;
  let activeMessage;

  async function callApi(url, config = {}) {
    let fetchOptions = {};

    if (config.secure) {
      const token = await $auth0Client.getTokenSilently();

      fetchOptions = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        ...fetchOptions
      };
    }

    const response = await fetch(url, fetchOptions);
    const responseBody = await response.json();

    if (response.ok) {
      return { error: null, data: responseBody };
    }

    return {
      error: {
        status: response.status,
        message: responseBody.message
      },
      data: null
    };
  }

  async function getMessage(type) {
    /**
     * To call the /api/messages/admin endpoint, you need to log in
     * as a user that has the messages-admin role, which in turn
     * has the read:admin-messages permission.
     * If you need help doing so, check out the following resources.
     * Create roles:
     * https://auth0.com/docs/authorization/rbac/roles/create-roles
     * Create permissions:
     * https://auth0.com/docs/get-started/dashboard/add-api-permissions
     * Add permissions to roles:
     * https://auth0.com/docs/authorization/rbac/roles/add-permissions-to-roles
     * Assign roles to users:
     * https://auth0.com/docs/users/assign-roles-to-users
     */
    const resourceUrl = `${apiServerUrl}/api/messages/${type}`;

    activeMessage = type;

    const config = {};

    if (type !== "public") {
      config.secure = true;
    }

    try {
      const { error, data } = await callApi(resourceUrl, config);

      if (data) {
        message = data.message;
        return;
      }

      if (error) {
        message = `Error ${error.status}: ${error.message}`;
        return;
      }

      message = "Unable to retrieve messages.";
    } catch (error) {
      message = error.message || error;
    }
  }

  onMount(async () => {
    await getMessage("public");
  });
</script>

<main>
  <div class="content-layout">
    <h1 class="content__title">External API</h1>
    <div class="content__body">
      <p>
        You can use the buttons below to retrieve the corresponding message from
        an external API.
        <br />
        <strong>Only authenticated users can access this page.</strong>
      </p>

      <div class="messages-grid">
        <div class="messages-grid__header">Messages</div>
        <div class="messages-grid__options">
          <div
            on:click={() => getMessage("public")}
            class="messages-grid__option {activeMessage === 'public'
              ? 'messages-grid__option--active'
              : ''}"
          >
            Public
          </div>
          <div
            on:click={() => getMessage("protected")}
            class="messages-grid__option {activeMessage === 'protected'
              ? 'messages-grid__option--active'
              : ''}"
          >
            Protected
          </div>
          <div
            on:click={() => getMessage("admin")}
            class="messages-grid__option {activeMessage === 'admin'
              ? 'messages-grid__option--active'
              : ''}"
          >
            Admin
          </div>
        </div>
        <code class="messages-grid__message">
          {message}
        </code>
      </div>
    </div>
  </div>
</main>
