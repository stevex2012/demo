<script lang="ts">
  import svelteLogo from "../../assets/svelte.svg";
  import Counter from "../../lib/Counter.svelte";
  import { link } from "svelte-spa-router";
  import Login from "../../lib/Login.svelte";
  import Each from "../../lib/Each.svelte";
  import AwaitBlock from "../../lib/AwaitBlock.svelte";
  import Button from "../../lib/Button.svelte";
  import Input from "../../lib/Input.svelte";
  import NumberInput from "../../lib/NumberInput.svelte";
  import GroupInput from "../../lib/GroupInput.svelte";
  import TextArea from "../../lib/TextArea.svelte";

  const src =
    "https://files.deepal.com.cn/article-1518794384849113089-1652835713314.png";

  const htmlStr = `<h1>htmlStr</h1>`;
</script>

<!-- <main> -->
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite Logo" />
  </a>
  <a href="https://svelte.dev" target="_blank">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
</div>
<h1>Vite + Svelte</h1>
<Button />
<TextArea />
<NumberInput />

<GroupInput />
<Input />
<Login />
<Each />
<AwaitBlock />
<div class="card">
  <Counter />
</div>
<!-- <img {src} /> -->
<a href="/about" use:link>The Little Prince</a>
<p>this is a text</p>
<div>{@html htmlStr}</div>

<!-- </main> -->
<style>
  p {
    border: 1px solid orange;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
