class DateValidator{
    constructor(eventDateInput, eventDate){
        this.eventDateInput = eventDateInput;
        this.eventDate = new Date(eventDate);
        this.validDate();
    }
    validDate(){
        const currentDate = new Date();
        if(currentDate > this.eventDate){
            this.eventDateInput.classList.add("input--error");
            setTimeout(()=>{
                this.eventDateInput.classList.remove("input--error");
            },2000)
            throw "Incorrect date!";   
        }
    }
}

export default DateValidator;