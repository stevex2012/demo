import { Component,createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = (pops) => {
  const [count,setCount] = createSignal(1);
  const handleClk = ()=> setCount(count()+1)
  // createSignal
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        
        <button onClick={handleClk}>

        {count()}
        </button>
      </header>
    </div>
  );
};

export default App;
