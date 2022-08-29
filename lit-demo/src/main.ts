import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import  './components/my-cmp'
import  './components/my-button'
import  './components/my-cls-map'


@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue;border:1px solid red }`;

  @property()
  name = 'Somebody';

  render() {
    return html`<p>Hello, ${this.name}!</p>
    <my-cmp name="I'm coming">
      <h3>234</h3>
    </my-cmp>
    <my-button btnName="button"></my-button>
    <my-cls-map></my-cls-map>
    `;
  }
}
