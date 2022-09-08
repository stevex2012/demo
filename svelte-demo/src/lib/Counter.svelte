<script lang="ts">
  export let props = "defalut props";
  let count: number = 0;
  $: double = count * 2;
  $: if (count >= 10) {
    alert("count is large");
    count = 9;
  }
  const increment = () => {
    count += 1;
  };
</script>

<div>
  props:{props}
  double: {double}
  <button on:click={increment}>
    count is {count}
  </button>
</div>
