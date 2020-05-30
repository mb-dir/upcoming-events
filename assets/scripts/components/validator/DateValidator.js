class DateValidator{
    constructor(eventDateInput, eventDate){
        this.eventDateInput = eventDateInput;
        this.eventDate = new Date(eventDate);
        this.validDate();
    }
    validDate(){
        const currentDate = new Date();
        if(currentDate > this.eventDate){
            throw "Incorrect date!"
        }
    }
}

export default DateValidator;