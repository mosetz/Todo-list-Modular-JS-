/*
  This is use to create a button component for 
  the Todo list app
*/
class Button extends HTMLElement {
    //constructor for the button
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>${this.getStyle()}</style>
        <button class="submit-button" type="submit">Add task</button>
        `;
    }

    getStyle() {
        return `
        
        `;
    }
}

//Define the custom element
customElements.define('submit-button', Button);