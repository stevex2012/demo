import { html,css,LitElement, CSSResultGroup } from "lit";
import {customElement, property,state} from 'lit/decorators.js';

const red = css`red`
const green = css`green`
const green1 = `green`

@customElement('my-button')
export class MyButton extends LitElement {

    @state()
    count = 0;

    @property({type: String})
    btnName = 'my first web component'

    static styles = [css`h1{color:red}`,css`button {border-color:${red}}`,css`button{color: ${green}}`]

    name(){
        return html`<span>${this.btnName}</span>`
    }



    handleClick(){
        console.log('click')
        this.btnName = 'clicked'
        this.count ++ ;
    }


    render(){
        return html`<button @click="${this.handleClick}">${this.name()}${this.count}</button>`
    }
}