class DrawList{
    constructor(nameEventsArray, referenceToList){
        //this property stores name of events array which is in localstore 
        this.nameEventsArray = nameEventsArray;
        this.referenceToList = referenceToList;
        this.drawList();
    }
    //Methods responsible for drawing events list based on localstorage
    drawList(){
        const eventsArray = JSON.parse(window.localStorage.getItem(this.nameEventsArray))
        eventsArray.forEach(ev => {
            const {date, name} = ev;
            const listItem = this.createListItem(date, name);
            this.referenceToList.appendChild(listItem);
        });
    }
    createListItem(name, date){
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

    //Methods responsible for dynamically adding events to list
}
export default DrawList;