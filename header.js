// create an HTML template element
const template = document.createElement('template')

template.innerHTML = `
<style>

#title {
    
    font-weight: 400px;
    color: #07020D;
}

#download {
    background-color: #a3737dff;
    border-radius: 13px;
    padding: 10px; 
    color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.nav-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2em;
}

.nav-bar {
display: flex; 
justify-content: space-between;
margin: 2em;
}

.nav-bar a {
        text-decoration: none;
    text-align: center;
    
    color: #07020D;
    text-decoration: none;
    font-weight: 500;
}
.nav-bar a:hover {
    text-decoration: none;
    color: #07020D;
    transform: scale(1.1);
}

a {
    text-decoration: none;
    transition: transform 0.2s ease;

    color: black;

}

a:hover {
    color: #FF5678;
    transform: scale(1.02);

}

.gobble-frog {
    width: 100%;
    max-width: 50px;
    border-radius: 10px;
}
.recipe-header {
    display: flex; 
    align-items: center;
    width: 100%;
    gap: 1em;
    
}


.download:hover {
    color: white !important;
}
    @media (max-width: 600px) {
 

    .nav-bar {
        align-items: center;
        flex-direction: column;
        
    }
}

</style>


    
`

// create a navBar class, and clone the content of the template into it
class navBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define('nav-bar', navBar)