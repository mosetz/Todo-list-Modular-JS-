class InputField extends HTMLElement {

    //contructor for the input field
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>${this.getStyle()}</style>
        <input type="text" class="task-input" placeholder="Enter your task...">
        `;
    }

    getStyle(){
        return`
        `;
    }

}

//Define the custom element
customElements.define('input-field', InputField);
