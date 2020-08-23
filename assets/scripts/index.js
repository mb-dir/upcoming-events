import SaveStore from './components/upcoming_events/SaveStore.js';
import DrawList from './components/upcoming_events/DrawList.js';
import EventsHandling from './components/upcoming_events/EventsHandling.js';
import DateValidator from './components/validator/DateValidator.js';
import DateSorter from './components/sorter/DateSorter.js';
import DeleteOldEvents from './components/upcoming_events/DeleteOldEvents.js';

const deleteOldEvents = new DeleteOldEvents('events');
const addEventForm = document.querySelector('#addEventForm');
const eventsList = document.querySelector('#eventsList');
const eventDateInput = document.querySelector('#eventDate');
const errorDivInfo = document.querySelector('.errorInfo');
const drawList = new DrawList('events', eventsList);
const dateSorter = new DateSorter('events');

//Variables related with dark mode
const darkModeCheckbox = document.querySelector('#darkModeCheckbox');
//Everyone btns and inputs will be changed in dark mode
const allButtonsOnPage = document.querySelectorAll('.btn');
const allInputssOnPage = document.querySelectorAll('.input');

addEventForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //variables
    const eventName = document.querySelector('#eventContents').value;
    const eventDate = eventDateInput.value;

    const dateValidator = new DateValidator(eventDateInput, eventDate, errorDivInfo);
    const saveEvent = new SaveStore(eventName, eventDate);
    const eventsHandling = new EventsHandling(eventName, eventDate, eventsList);
    eventsHandling.dynamicallyAddEvent();
    dateSorter.sort();
});