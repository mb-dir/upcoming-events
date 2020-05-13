import SaveStore from './components/SaveStore.js';
import DrawList from './components/SaveStore.js';
const addEventForm = document.querySelector('#addEventForm');

addEventForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //variables
    const eventName = document.querySelector('#eventContents').value;
    const eventDate = document.querySelector('#eventDate').value;

    const saveEvent = new SaveStore(eventName, eventDate);
});