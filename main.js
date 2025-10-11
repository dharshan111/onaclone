function validation(event){
    event.preventDefault();

    emailValidation();
    companyValidation();
    engineerValidation(); 
    selectValidation();

    if(emailValidation() && companyValidation() && engineerValidation() && selectValidation())
    {
        form.submit();
        alert('submitted successfully')
    }

}

let valid = true;


function emailValidation() {
    const email = document.getElementById('email-inp').value.trim();
    const emailError = document.getElementById('error-email');
    valid = true;
    if(email === ''|| !email.includes('@')){
        emailError.textContent = 'This field is required';
        document.getElementById('email-inp').style.border = '1px solid red'
    }
    

    else{
        emailError.textContent = '';
        document.getElementById('email-inp').style.border = '1px solid green'
        console.log(`Email: ${email}`);        
    }
    return valid
}

function companyValidation(){
    const company = document.getElementById('company-inp').value.trim();
    const companyError = document.getElementById('error-company');
    valid = true;

    if(company === ''){
        companyError.textContent = 'This field is required';
        document.getElementById('company-inp').style.border = '1px solid red'   
    }else if(!isValid(company)){
        companyError.textContent = 'Enter a valid website';
        document.getElementById('company-inp').style.border = '1px solid red'   
    }else{
        companyError.textContent = '';
        document.getElementById('company-inp').style.border = '1px solid green'   
        
    }
    return valid
}

function isValid(str){
    try {
        const url = new URL(str)
        return url.protocol === 'http:' || url.protocol === 'https:'; 
    } catch (error) {
        return false;
    }
}

function engineerValidation(){
    const engineer = document.getElementById('dropdown-inp');
    const engineerError = document.getElementById('error-drop');
    valid = true;

    if(engineer === ''){
        engineerError.textContent = 'This field is required';
        document.getElementById('dropdown-inp').style.border = '1px solid red';
    }else{
        document.getElementById('dropdown-inp').style.border = '1px solid green';
    }
    return valid
}

function selectValidation(){
    const select = document.getElementsByClassName('select')
    const selectError = document.getElementById('error-select');
    let selected = false;

    for(let i = 0; i < select.length; i++){
        if(select[i].checked){
            selected = true;
            break;
        }
    }

    if(!selected){
        selectError.textContent = 'This field is required';
        return false;
    }else{
        selectError.textContent = '';
        return true;
    }
}


const form = document.getElementById('form');
form.addEventListener("submit", validation)

document.getElementById('email-inp').addEventListener('input', emailValidation)
document.getElementById('company-inp').addEventListener('input', companyValidation)
document.getElementById('dropdown-inp').addEventListener('input', engineerValidation)
document.getElementById('dropdown-inp').addEventListener('input', selectValidation)

const select = document.getElementsByClassName('select')
select.forEach(r => {
    r.addEventListener('change', selectValidation)
});

