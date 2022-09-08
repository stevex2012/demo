<script>
  let name = "";
</script>

<input bind:value={name} placeholder="input your name" />
<p>hello name {name || "steve"}</p>
