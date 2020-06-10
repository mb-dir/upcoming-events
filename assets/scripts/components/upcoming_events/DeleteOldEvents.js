class DeleteOldEvents{
    constructor(nameEventsArray) {
        this.nameEventsArray = nameEventsArray;
        this.checkEventsDate();
    }
    checkEventsDate(){
        const eventsArray = JSON.parse(window.localStorage.getItem(this.nameEventsArray));
        const nowDate = new Date();
        const yesterday = nowDate.setDate(nowDate.getDate() - 1)

        eventsArray.forEach((ev, evIndex, evArr) => {
            //cuz I do not want to delete events which happened that day
            if (new Date(ev.date) < yesterday) {
                evArr.splice(evIndex, 1);
                window.localStorage.setItem(this.nameEventsArray, JSON.stringify(evArr));
            }
        });
    }
}

export default DeleteOldEvents;