<!-- each block -->
<script>
  import { identity } from "svelte/internal";

  let cards = [
    { id: "1", name: "steve" },
    { id: "2", name: "mike" },
    { id: "3", name: "harry" },
  ];
  const hanleRMItem = () => (cards = cards.slice(1));
</script>

<button on:click={hanleRMItem}>remove item</button>
<ul>
  {#each cards as { id, name } (id)}
    <li>{name}</li>
  {/each}
</ul>
<!-- 不同的key 会有不同的追踪效果 -->
