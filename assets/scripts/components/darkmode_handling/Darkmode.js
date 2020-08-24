class DarkMode {
    constructor(bodyDarkModeClassName, btnModeChange) {
        this.bodyDarkModeClassName = bodyDarkModeClassName;
        this.btnModeChange = btnModeChange;

        this.buttonHandling();
    }

    buttonHandling(){
        this.btnModeChange.addEventListener('click', ()=>{
            document.body.classList.toggle(this.bodyDarkModeClassName);
        })
    }
}

export default DarkMode;