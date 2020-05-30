class DateValidator{
    constructor(eventDateInput, eventDate, errorDivInfo){
        this.eventDateInput = eventDateInput;
        this.eventDate = new Date(eventDate);
        this.errorDivInfo = errorDivInfo;
        this.validDate();
    }
    validDate(){
        const currentDate = new Date();
        if(currentDate > this.eventDate){
            this.showInfo();
            throw "Incorrect date!";   
        }
    }
    showInfo(){
        this.eventDateInput.classList.add("input--error");
        this.errorDivInfo.classList.add("animApperance");
        setTimeout(() => {
            this.eventDateInput.classList.remove("input--error");
            this.errorDivInfo.classList.remove("animApperance");
        }, 7000)
    }
}

export default DateValidator;