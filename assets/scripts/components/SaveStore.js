class SaveStore{
    constructor(eventName, eventDate){
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.saveEvent();
    }
    saveEvent(){
        //If array called "eventsToSave" does not exist in localstore create an empty array, if exist use it
        //On the first use there is no "eventsToSave" in localstore, so we need to create this array
        //In each subsquent use there is "eventsToSave" in localstore, so we need not to create an empty array, we need push another one object(event) to an existing array 
        const eventsToSave = JSON.parse(window.localStorage.getItem('events')) ? JSON.parse(window.localStorage.getItem('events')) : [];
        const event = {
            name: this.eventName,
            date: this.eventDate,
        }
        eventsToSave.push(event);
        window.localStorage.setItem('events', JSON.stringify(eventsToSave));
    }
}

export default SaveStore;