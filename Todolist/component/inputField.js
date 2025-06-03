class InputField extends HTMLElement {

    //contructor for the input field
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        //Create the input field
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'input';
        input.placeholder = 'Add new todo...';

        const style = document.createElement('style');
        style.textContent = `
        `;

        //append to shadow root
        this.shadowRoot.append(style, input);

        //save ref
        this._input = input;
    }

    // create getter gor app.js to use .value
    get value() {
        return this._input.value;
    }

    //allow resetting the input like .value = ''
    set value(val){
        this._input.value = val;
    }
}

//Define the custom element
customElements.define('input-field', InputField);
