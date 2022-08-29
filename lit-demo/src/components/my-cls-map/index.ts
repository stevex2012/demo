import { html,css,LitElement, CSSResultGroup } from "lit";
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';

@customElement('my-cls-map')
export class MyClsMap extends LitElement {
    constructor(){
        super()
        console.log('---')

    }

    static styles = css`
        .border{
            border: 1px solid red;
        }
        .bg{
            background: orange;
        }
    `

    @property()
    classes = {border: true,bg: true}

    @property()
    style = {color:'#fff'}

    render(){
        return html`
        <!-- <simple-greeting name="World"></simple-greeting> -->
        <div class=${classMap(this.classes)} style=${styleMap(this.style)}>my-cls-map</div>
        `
    }

}