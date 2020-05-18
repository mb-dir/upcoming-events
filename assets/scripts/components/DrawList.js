import CreateListItem from './CreateListItem.js'

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
        if (eventsArray !== null) {
            eventsArray.forEach(ev => {
                const {date, name} = ev;
                const listItemCreator = new CreateListItem(date, name, this.referenceToList);
                const listItem = listItemCreator.createListItem();
                this.referenceToList.appendChild(listItem);
            });
        }
    }
}
export default DrawList;