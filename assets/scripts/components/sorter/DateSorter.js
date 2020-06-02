class DateSorter{
    constructor(arrayEventsName){
        this.arrayEventsName = arrayEventsName;
        this.sort();
    }
    sort(){
        const eventsToSort = JSON.parse(window.localStorage.getItem(this.arrayEventsName));
        for(const item of eventsToSort){
            console.log(item.date)
        }
    }
}

export default DateSorter;