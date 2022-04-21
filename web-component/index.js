const template = document.createElement('template')

template.innerHTML = `
  <style>
  :host {
    contain: content;
    display: inline-block;
  }
  </style>
  <div class="card">
    <h1>1312</h1>
  </div>

`

class OrderCard extends HTMLElement {
  static get observeAttributes(){
    return ['title','data2','data3']
  }

  get title(){
    return this.getAttribute('title')
  }

  set title(value){
    return this.setAttribute('title', value)
  }
  get data1(){
    return this.getAttribute('data1')
  }

  constructor(){
    super();
    console.log('this',this);
    this.handleClick = this.log.bind(this)
    console.log(this.handleClick)
  }
  log=(e)=>{
    console.log('handleClick',this,e.target)
  }
  connectedCallback(){
    console.log('connectedCallback')
    const shadowRoot = this.attachShadow({mode: "closed"});
    // shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.innerHTML = `
    <style>
    :host {
      contain: content;
      display: block;
    }
    body{
      background:red;
    }
    .attributes{
      background: orange;
    }
    </style>
    <div class="card">
      <h1>${this.title}</h1>
      <h2>${this.data1}</h2>
      <button>button</button>
      <slot name="attributes"><p>None</p></slot>
    </div>
  
  `
  shadowRoot.querySelector('button').addEventListener('click', this.handleClick)


  }

  attributeChangedCallback(){
    console.log('attributeChangedCallback')
  }
}


window.customElements.define('order-card',OrderCard)