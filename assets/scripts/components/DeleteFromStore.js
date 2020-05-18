class DeleteFromStore{
    constructor(name, nameEventsArray) {
        this.name = name;
        this.nameEventsArray = nameEventsArray;
        this.deleteFromStore();
    }
    deleteFromStore(){
        const eventsArray = JSON.parse(window.localStorage.getItem(this.nameEventsArray));
        eventsArray.forEach((ev, evIndex, evArr)=>{
            if(Object.values(ev).includes(this.name)){
                evArr.splice(evIndex, 1);
                window.localStorage.setItem(this.nameEventsArray, JSON.stringify(evArr));
            }
        });
    }
}

export default DeleteFromStore;