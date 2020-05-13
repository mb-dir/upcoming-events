class DrawList{
    constructor(nameEventsArray){
        //this property stores name of events array which is in localstore 
        this.nameEventsArray = nameEventsArray;
        this.drawList();
    }
    drawList(){
        const eventsArray = JSON.parse(window.localStorage.getItem(this.nameEventsArray))
        console.log(eventsArray)
    }
}
export default DrawList;