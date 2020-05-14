class DrawList{
    constructor(nameEventsArray){
        //this property stores name of events array which is in localstore 
        this.nameEventsArray = nameEventsArray;
        this.drawList();
    }
    drawList(){
        const eventsArray = JSON.parse(window.localStorage.getItem(this.nameEventsArray))
        eventsArray.forEach(ev => {
            const {date, name} = ev
            console.log(this.createListItem(name, date))
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
        
        //combining components of list item

        dataContainer.appendChild(list__eventContents);
        dataContainer.appendChild(list__eventDate);
        listItem.appendChild(dataContainer);
        listItem.appendChild(btnDelete);

        return listItem;
    }
}
export default DrawList;