import { html,css,LitElement, CSSResultGroup } from "lit";
import {customElement, property} from 'lit/decorators.js';

@customElement('my-cmp')
export class MyCmp extends LitElement {

    @property({type: String})
    name = 'my first web component'

    static styles = css`
     :host {
      display: block;
      background-color: lightgray;
      padding: 8px;
      border: 1px solid;  
    }

    :host(.bule){
        height: 20px;
        background:blue;
    }
   

    h1{color:orange};
    `

    render(){
        return html`
        <h1>${this.name}</h1>
        <div class="bule"></div>
        <slot></slot>
    `
    }
}