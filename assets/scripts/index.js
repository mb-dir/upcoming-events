const addEventForm = document.querySelector('#addEventForm');

addEventForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //variables
    const eventName = document.querySelector('#eventContents').value;
    const eventDate = document.querySelector('#eventDate').value;
});