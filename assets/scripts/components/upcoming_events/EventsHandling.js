import CreateListItem from './CreateListItem.js';

class EventsHandling{
    constructor(eventName, eventDate, referenceToList) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.referenceToList = referenceToList;
    }
    dynamicallyAddEvent(){
        const listItemCreator = new CreateListItem(this.eventName, this.eventDate, this.referenceToList);
        const itemToAdd = listItemCreator.createListItem();
        this.referenceToList.appendChild(itemToAdd);
    }
}

export default EventsHandling;