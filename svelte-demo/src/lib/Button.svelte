<script>
  //   import Inner from "./Inner.svelte";
  import Outer from "./Outer.svelte";
  const handleClick = (e) => {
    console.log("e", e);
  };
</script>

<Outer on:message={handleClick} />

<!-- 多层级组件传递，支持 -->
