class CreateListItem {
    constructor(eventName, eventDate, referenceToList) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.referenceToList = referenceToList;
    }
    createListItem() {
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('dataContainer');

        const list__eventContents = document.createElement('div');
        list__eventContents.classList.add('list__eventContents');
        list__eventContents.textContent = this.eventName;

        const list__eventDate = document.createElement('div');
        list__eventDate.classList.add('list__eventDate');
        list__eventDate.textContent = this.eventDate;

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

export default CreateListItem;