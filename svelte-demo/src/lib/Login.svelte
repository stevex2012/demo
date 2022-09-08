<!-- login btn if block -->
<script>
  let user = {
    login: false,
  };
  const handleLogin = () => {
    user.login = user.login ? false : true;
    // user.login = user.login ? false : true;
  };
</script>

{#if user.login}
  <button on:click={handleLogin}>login out</button>
{:else}
  <button on:click={handleLogin}>login in</button>
{/if}
