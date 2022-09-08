<!-- promise awiate block -->
<script>
  async function getRandomNumber(params) {
    const res = await fetch(
      "https://uat.deepal.com.cn/202209080138/static/f9-3.4b6cf0b6.jpg"
    );
    return "123132";
    if (res.ok) {
      return "123";
    } else {
      throw new Error("eror");
    }
  }
  let promise;
  const hanldeClick = () => {
    promise = getRandomNumber();
  };
</script>

<button on:click={hanldeClick}>await load btn</button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
