const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea')

// localStorage.clear()
const storageKey = "feedback-form-state";

const formData = {
    email: '',
    message: '',
}

form.addEventListener('submit', handleForm);
form.addEventListener('input', handleInputForm);



const valueStorage = localStorage.getItem(storageKey);
const parc = JSON.parse(valueStorage);

if(parc !== null && parc !== undefined){
    input.value = parc.email;
    textArea.value = parc.message;
    formData.email = parc.email;
    formData.message = parc.message;
    
    
}




function handleForm(event){
    event.preventDefault();

    const form = event.currentTarget;


    if(input.value.trim() === '' || textArea.value.trim() === ''){
        alert('Fill please all fields');
        return;
        
    }
    else if(input.value.trim() !== '' && textArea.value.trim() !== ''){
          console.log(formData);
    } 
    

    

    
    
    try {

        

        form.reset();
        formData.email = '';
        formData.message = '';
        localStorage.removeItem(storageKey);
        
        
        
        
    
    } catch (error) {
        alert(error.message);
        
    }
        
        
    
    
    


}


// function handleInput(event){
    
//     const email = event.target.value;

//     formData.email = email;
   
    
    
// }

// function handleTextArea(event){
//     const message = event.currentTarget.value;

//     formData.message = message;
    
// }


function handleInputForm(event){
    const {name, value} = event.target;

    if(name === 'email' || name === 'message'){
        formData[name] = value.trim();

    }
    localStorage.setItem(storageKey, JSON.stringify(formData));
    

}