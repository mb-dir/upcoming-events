import CreateListItem from './CreateListItem.js';

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
        const nowDate = new Date();
        const yesterday = nowDate.setDate(nowDate.getDate() - 1)
        if (eventsArray !== null) {
            eventsArray.forEach(ev => {
                const {date, name} = ev;
                //If the event is outdated it will not be draw
                if (new Date(ev.date) < yesterday) {
                    return;
                }else{
                    const isCloseEvent = this.markCloseEvent(date);
                    const listItemCreator = new CreateListItem(name, date, this.referenceToList, isCloseEvent);
                    const listItem = listItemCreator.createListItem();
                    this.referenceToList.appendChild(listItem);
                }
            });
        }
    }

    //auxiliary methods

    //this method checks if date is close, it cooperates with class responsible for creating list item(CreateListItem)
    markCloseEvent(eventDate){
        const nowDate = new Date();
        const dateEvent = new Date(eventDate);
        if ((dateEvent - nowDate) / 86400000 < 4) {
            return true;
        }else{
            return false;
        }
    }
}
export default DrawList;