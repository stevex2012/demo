<!--  -->
<script>
  let second = 1;
  let menuVal = "menu1";

  let menus = ["menu1", "menu2", "menu3"];
</script>

<label for="">
  <input type="radio" bind:group={second} value={1} />
  <input type="radio" bind:group={second} value={2} />
  <input type="radio" bind:group={second} value={3} />
</label>

<p>your second is {second}</p>

{#each menus as menu}
  <label for="">
    <input type="checkbox" bind:group={menuVal} value={menu} />
    {menu}
  </label>
{/each}
<p>menuVal is {menuVal}</p>
