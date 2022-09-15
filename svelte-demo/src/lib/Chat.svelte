<script>
  import Eliza from "elizabot";
  import { beforeUpdate, afterUpdate } from "svelte";

  const eliza = new Eliza();
  let comments = [
    {
      author: "eliza",
      text: eliza.getInitial(),
    },
  ];
</script>

<div>
  {#each comments as { author, text }}
    <div>{text}</div>
  {/each}
  <input type="text" />
</div>
