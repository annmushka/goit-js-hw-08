import throttle from "lodash.throttle";

const contactElem = document.querySelector('.feedback-form');
const userInfo = JSON.parse(localStorage.getItem('feedback-form-state')) || {};


const fillContactFormFields = () => { 
    try {
        const userInfoLs = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (userInfoLs === null) {
            return;
        }
        for (const prop in userInfoLs) {
            contactElem.elements[prop].value = userInfoLs[prop];
        }
    } catch (err) {
            console.error(err);
        }
};
fillContactFormFields();

const onContactFieldChange = event => {
    const { target } = event;

    const fieldValue = target.value;
    const fieldName = target.name;
    
    userInfo[fieldName] = fieldValue;
    
    localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
    
};
const onContactFormSubmit = event => {
    event.preventDefault();
    contactElem.reset();
    console.log(userInfo);
    localStorage.removeItem('feedback-form-state');
    
};

contactElem.addEventListener('input', throttle(onContactFieldChange, 500));
contactElem.addEventListener('submit', onContactFormSubmit);