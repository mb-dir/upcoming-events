class EventsHandling{
    constructor(eventName, eventDate, referenceToList) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.referenceToList = referenceToList;
    }
    dynamicallyAddEvent(){
        const listItemCreator = new CreateListItem(this.eventDate, this.eventName);
        const itemToAdd = listItemCreator.createListItem();
        this.referenceToList.appendChild(itemToAdd)
    }
}

export default EventsHandling;