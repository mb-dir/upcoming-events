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
                    const listItemCreator = new CreateListItem(name, date, this.referenceToList);
                    const listItem = listItemCreator.createListItem();
                    this.referenceToList.appendChild(listItem);
                }
            });
        }
    }
}
export default DrawList;