class DarkMode {
    constructor(bodyDarkModeClassName, btnModeChange) {
        this.bodyDarkModeClassName = bodyDarkModeClassName;
        this.btnModeChange = btnModeChange;

        this.rememberDarkMode();
        this.buttonHandling();
    }

    buttonHandling(){
        this.btnModeChange.addEventListener('click', ()=>{
            document.body.classList.toggle(this.bodyDarkModeClassName);
            //When user clicks the button, check if there is "darkMode" in sotrage, if it isn'tgit status set darkMode to true else set false
            if (window.localStorage.getItem("darkMode") !== "true"){
                window.localStorage.setItem("darkMode", true);
            }else{
                window.localStorage.setItem("darkMode", false);
            }
        })
    }

    rememberDarkMode(){
        if (window.localStorage.getItem("darkMode") === "true"){
            document.body.classList.add(this.bodyDarkModeClassName);
            this.btnModeChange.checked = true;
        }else{
            document.body.classList.remove(this.bodyDarkModeClassName);
            this.btnModeChange.checked = false;
        }
    }
}

export default DarkMode;