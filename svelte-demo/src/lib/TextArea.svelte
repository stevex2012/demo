<script>
  import { marked } from "marked";
  let val = "";
</script>

<textarea cols="30" rows="10" bind:value={val} />
{@html marked(val)}
