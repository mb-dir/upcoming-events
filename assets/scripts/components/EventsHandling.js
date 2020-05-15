class EventsHandling{
    constructor(eventName, eventDate, referenceToList) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.referenceToList = referenceToList;
    }
    dynamicallyAddEvent(){
        const itemToAdd = this.createListItem(this.eventName, this.eventDate);
        referenceToList.appendChild(itemToAdd)
    }
    createListItem(name, date) {
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('dataContainer');

        const list__eventContents = document.createElement('div');
        list__eventContents.classList.add('list__eventContents');
        list__eventContents.textContent = name;

        const list__eventDate = document.createElement('div');
        list__eventDate.classList.add('list__eventDate');
        list__eventDate.textContent = date;

        const btnDelete = document.createElement('button');
        btnDelete.className = "btn btn--deleteEvent";
        btnDelete.textContent = "X";

        //combining components of list item

        dataContainer.appendChild(list__eventContents);
        dataContainer.appendChild(list__eventDate);
        listItem.appendChild(dataContainer);
        listItem.appendChild(btnDelete);

        return listItem;
    }
}

export default EventsHandling;