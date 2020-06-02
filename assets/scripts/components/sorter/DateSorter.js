class DateSorter{
    constructor(arrayEventsName){
        this.arrayEventsName = arrayEventsName;
        this.sort();
    }
    sort(){
        const eventsToSort = JSON.parse(window.localStorage.getItem(this.arrayEventsName));
        eventsToSort.sort(compareDate)

        function compareDate(a, b) {
            return new Date(a.date) - new Date(b.date);
        }
        window.localStorage.setItem(this.arrayEventsName, JSON.stringify(eventsToSort))
    }
}

export default DateSorter;