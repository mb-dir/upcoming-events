class DarkMode {
    constructor(bodyDarkModeClassName, btnModeChange) {
        this.bodyDarkModeClassName = bodyDarkModeClassName;
        this.btnModeChange = btnModeChange;

        this.buttonHandling();
    }

    buttonHandling(){
        this.btnModeChange.addEventListener('click', ()=>{
            document.body.classList.toggle(this.bodyDarkModeClassName);
            //When user clicks the button, check if there is "darkMode" in sotrage, if it isn't(condition returns false but "!" makes it true) set darkMode to true else set false
            if (!window.localStorage.getItem("darkMode")){
                window.localStorage.setItem("darkMode", true);
            }else{
                window.localStorage.setItem("darkMode", false);
            }
        })
    }
}

export default DarkMode;