class DarkMode {
    constructor(darkModeSuffix, bodyDarkModeClassName, btnModeChange, ...elementsToChange) {
        this.darkModeSuffix = darkModeSuffix;//suffix which will be added to class in dark mode
        this.bodyDarkModeClassName = bodyDarkModeClassName;
        this.btnModeChange = btnModeChange;
        this.elementsToChange = elementsToChange;//list of element to which the suffix will be added

        this.buttonHandling();
    }

    buttonHandling(){
        this.btnModeChange.addEventListener('click', ()=>{
            console.log("It works, you can create styles for dark mode")
        })
    }
}

export default DarkMode;