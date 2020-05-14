import SaveStore from './components/SaveStore.js';
import DrawList from './components/DrawList.js';
const drawList = new DrawList('events')
const addEventForm = document.querySelector('#addEventForm');
const eventsList = document.querySelector('#eventsList');

addEventForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //variables
    const eventName = document.querySelector('#eventContents').value;
    const eventDate = document.querySelector('#eventDate').value;

    const saveEvent = new SaveStore(eventName, eventDate);
});