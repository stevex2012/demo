<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const handleClick = () => {
    dispatch("message", {
      text: "hello",
    });
  };
</script>

<button on:click={handleClick}> click to say hello </button>
