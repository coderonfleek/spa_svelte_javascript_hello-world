<script>
  import { onMount } from "svelte";
  import auth from "./authService";
  import { isAuthenticated, user, auth0Client } from "./store";
  import TaskItem from "./components/TaskItem.svelte";

  import Router from "svelte-spa-router";
  import routes from "./routes";

  import NavBar from "./components/NavBar.svelte";
  import Footer from "./components/Footer.svelte";

  let client;
  let newTask;

  onMount(async () => {
    client = await auth.createClient();

    auth0Client.set(client);
    isAuthenticated.set(await client.isAuthenticated());
    user.set(await client.getUser());
  });

  /* function login() {
    auth.loginWithPopup(auth0Client);
  }

  function logout() {
    auth.logout(auth0Client);
  }

  function addItem() {
    let newTaskObject = {
      id: genRandom(),
      description: newTask,
      completed: false,
      user: $user.email
    };

    console.log(newTaskObject);

    let updatedTasks = [...$tasks, newTaskObject];

    tasks.set(updatedTasks);

    newTask = "";
  }

  function genRandom(length = 7) {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  } */
</script>

<main>
  <NavBar />
  <div class="page-layout">
    <!-- Application -->
    <div class="page-layout__content">
      <Router {routes} />
    </div>
  </div>
  <Footer />
</main>
